import { useState } from 'react'
import Contador from '../pages/contador.jsx'
import ExibirDados from '../pages/ExibirDados.jsx'

function PanelOptions(){

    const [page, setPage] = useState('Contador')


    return(
        <div>

            <ul className="nav nav-underline">
                <li className="nav-item">
                    <a className={page === "Contador" ? "nav-link active" : "nav-link"} href='#' onClick={() => setPage('Contador')} aria-current="page">Contador</a>
                </li>

                <li className="nav-item">
                    <a className={page === "ExibirDados" ? "nav-link active" : "nav-link"} href='#' onClick={() => setPage('ExibirDados')}>Exibir Dados</a>
                </li>

            </ul>

            <hr />

            <div className='d-flex justify-content-center align-items-center'>
                {page == "Contador" ? (
                    <Contador />
                ): page == "ExibirDados" ? (
                    <ExibirDados />
                ):(
                    <Contador />
                )}
            </div>

        </div>

    )
}

export default PanelOptions