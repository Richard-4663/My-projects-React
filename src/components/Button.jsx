function Button({text, funcao}){
    return(
        <button className="btn btn-primary" onClick={funcao}> {text} </button>
    )
}

export default Button