import "./style.css"

export function Number(props?: any): React.ReactElement{
    return (<>
        <button className="number">
            {`${props.number}`}
        </button>
    </>)
}