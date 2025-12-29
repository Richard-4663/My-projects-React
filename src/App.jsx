import './App.css'
import Tasks from './components/Tasks'
import AddTasks from './components/AddTasks'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';
import {v4} from 'uuid'


function App() {

  const [tasks, setTasks] = useState([]);


  function onTaskClick(id){

    const alterarCompleted = tasks.map(task => {
      if (task.id == id){
        return{ ...task, isCompleted: !task.isCompleted}
      }

      return task
    })
    
    setTasks(alterarCompleted);

  }

  function deleteTask(id){

    const newTasks = tasks.filter(task => task.id !== id)
    
    setTasks(newTasks)
    }


  function handlerAddtasks(title, description){

    const newTask = {id: v4(), title, description, isCompleted: false}

    setTasks([...tasks, newTask])

  }



  return(
    <div className='d-flex justify-content-center align-items-center min-vh-100 min-vw-100 bg-secondary'>
      <div>
        <h1 className='text-light'>Gerenciador de tarefas</h1>
        <AddTasks handlerAddtasks={handlerAddtasks} />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} deleteFunction={deleteTask}/>
      </div>
    </div>
  )

}

export default App
