import "./style.css"

export function Number(prop?: any): React.ReactElement{
    console.log("Number component rendered with prop:", prop);
    return (<>
        <button className="number">
            {`${prop.label}`}
        </button>
    </>)
}