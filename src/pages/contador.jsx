import { useState } from "react"
import Button from "../components/Button"

function Contador(){

    const [count, setCount] = useState(0)
    const aumentarContador = () => setCount((prevCount) => prevCount + 1)
    return(

        <div>
            <h1>aqui é o Home</h1>
            <h2>contador: {count}</h2>
            <Button text="Aumentar contador" funcao={aumentarContador}/>
        </div>

    )
}

export default Contador