function Button({text, onClick}){
    return(
        <button className="btn btn-primary m-2" onClick={onClick} > {text} </button>
    )
}

export default Button