import { useState } from "react"

function AddTasks({handlerAddtasks}){

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    
    return(
        <div className="p-4 bg-light rounded-3 mb-3">
                <input type="text" className="form-control mb-3" placeholder="Titulo da tarefa" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <input type="text" className="form-control mb-3" placeholder="Descrição da tarefa" value={description} onChange={(e) => setDescription(e.target.value)}/>
                <button onClick={() => {
                    
                    if (!title.trim() || !description.trim()){
                        return alert('preencha os campos vazios')
                    }

                    handlerAddtasks(title, description)
                    setTitle('');
                    setDescription('');
                    
                    }} className="form-control bg-dark text-light p-2">Adicionar</button>
        </div>
    )
}


export default AddTasks