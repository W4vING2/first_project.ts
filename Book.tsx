interface BookProps{
    title: string
    author: string
    year: number
    wasRead: boolean
}

function Todo(props:BookProps){
    return(
        <>
        <span>{props.title + " "} {props.author + " "} {props.year}</span>
        </>
    )
}
export default Todo;