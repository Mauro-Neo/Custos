import React from "react"

import { useNavigate } from 'react-router-dom'

import styles from './NewProject.module.css'
import ProjectForm from "../project/ProjectForm"

function NewProject() {

    const navigate = useNavigate()

    function createPost(project) {
        
        //Initializa cost and services
        project.cost = 0
        project.services =[]

        fetch("http://localhost:5000/projects", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json' 
            },
            body: JSON.stringify(project),
        }).then((resposta) => resposta.json())
        .then((data) => {
            const state = { message: "Projeto criado com sucesso!" };
            navigate("/projects", {state});
        })
        .catch((erro) => console.log(erro))
    }


    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
        </div>
    )
}

export default NewProject