export function Banner(props) {
    if(!props.warn){
        return null
    }

    return(
        <div>
            Предупреждение!
        </div>
    )
}