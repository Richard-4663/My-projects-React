import { useNavigate } from "react-router-dom"

function Tasks({tasks, onTaskClick, deleteFunction}){

    const navigate = useNavigate()

    function verDetalhesClick(task){

        const query = new URLSearchParams()
        query.set("title", task.title)      
        query.set("description", task.description)      

        navigate(`/task?${query.toString()}`)
    }

    return(
        <div>
            <ul className="list-unstyled p-4 bg-light rounded-3">
                    {tasks.map(task => 
                    <li key={task.id} className="d-flex">
                        <button className={`btn text-bg-dark p-2 rounded-3 fs-6 mb-2 w-100 me-2 text-start ${task.isCompleted && 'text-decoration-line-through'}`} onClick={() => onTaskClick(task.id)} >{task.title}</button>
                        <button className="btn text-bg-dark p-1 rounded-3 fs-6 mb-2 me-2 d-flex justify-content-center align-items-center" style={{width: 50}} onClick={() => deleteFunction(task.id)}><i className='bx  bx-trash-alt text-danger'></i></button>
                        <button onClick={() => verDetalhesClick(task)} className="btn text-bg-dark p-1 rounded-3 fs-6 mb-2 d-flex justify-content-center align-items-center" style={{width: 50}} ><i className=' bx  bx-arrow-right text-primary'></i></button>
                    </li>
                )}
            </ul>
        </div>
    )
}


export default Tasks