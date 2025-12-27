import { useState } from "react"
import Button from "../components/Button"

function Contador(){

    const [count, setCount] = useState(0)

    // funções do contador

    const alterarContador = (valor) => {
    setCount((prevCount) => {
        const novoValor = prevCount + valor
        if (novoValor < 0) return 0
        return novoValor
    })
}

    const zerarContador = () => setCount(0)

    return(

        <div>
            <h1>aqui é o Home</h1>
            <h2>contador: {count}</h2>
            <Button text="Diminuir" onClick={() => alterarContador(-1)}/>
            <Button text="Aumentar" onClick={() => alterarContador(1)}/>
            <br />
            <Button text="Zerar" onClick={zerarContador}/>
        </div>

    )
}

export default Contador