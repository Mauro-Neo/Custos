import loading from '../../img/loading.svg'

import styes from './Loading.module.css'

function Loading() {
    return (
        <div className={styes.loader_container}>
            <img className={styes.loader} src={loading} alt='Loading' />
        </div>
    )
}

export default Loading