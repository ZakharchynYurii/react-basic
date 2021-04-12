export function List(props) {
    const {items} = props

    return(
        <ul>
            {items.map((item, index) => {
                return <li key={index}>{item}</li>
            })}
        </ul>
    )
}