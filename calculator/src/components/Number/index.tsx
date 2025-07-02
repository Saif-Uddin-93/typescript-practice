import "./style.css"

export function Number(props?: any): React.ReactElement{
    console.log("Number component rendered with number:", props.number);
    return (<>
        <button className="number">
            {`${props.number}`}
        </button>
    </>)
}