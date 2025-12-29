import { useSearchParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function TaskPage(){

    const [searchParams] = useSearchParams();
    const title = searchParams.get("title") 
    const description = searchParams.get("description") 
    const navigate = useNavigate()

    function voltar(){
        navigate(-1);
    }

    return(
        <div className='d-flex justify-content-center align-items-center min-vh-100 min-vw-100 bg-secondary text-center'>
            <div className="w-25" >
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btn" onClick={voltar}><i class='bx  bx-arrow-out-left-circle-half text-light'></i></button> 
                    <h2 className="mb-3 text-light">Detalhes da tarefa</h2>
                </div>
                <div className="p-3 bg-light rounded-3 mb-3 text-start">
                    <h3>{title}</h3>
                    <p className="fs-5">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default TaskPage