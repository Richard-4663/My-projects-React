function Button({text, funcao}){
    return(
        <button onClick={funcao}> {text} </button>
    )
}

export default Button