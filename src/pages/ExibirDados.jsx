import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function ExibirDados(){

    const [name, setName] = useState()
    const handleClickForm = (e) => {
        e.preventDefault();
        alert(`exibindo o nome do usuario, Nome: ${name}`)
    }

    return (
        <div>
            --------------------------------------------------------------------
            <form onSubmit={handleClickForm}>
                <h1 className='mb-4'>aqui é o Exibir dados</h1>
                <label htmlFor="name">Nome completo</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" name="name" placeholder='digite seu nome aqui'/>
                <input type="submit" className='btn btn-primary mt-3'/>
            </form>
        </div>
    )
}

export default ExibirDados