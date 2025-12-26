import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function ExibirDados(){

    const [name, setName] = useState()
    const [nameTemporario, setNameTemporario] = useState();

    const handleClickForm = (e) => {
        e.preventDefault();
        setName(nameTemporario);
    }

    return (
        <div>
            <form onSubmit={handleClickForm}>
                <h1 className='mb-4'>aqui é o Exibir dados</h1>
                <label htmlFor="name">Nome completo</label>
                <input type="text" value={nameTemporario} onChange={(e) => {setNameTemporario(e.target.value)}} className="form-control" name="name" placeholder='digite seu nome aqui'/>
                <input type="submit" className='btn btn-primary mt-3'/>
            </form>
                <h3>O nome digitado é: {name}</h3>
        </div>
    )
}

export default ExibirDados