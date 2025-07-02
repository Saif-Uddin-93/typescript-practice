import "./style.css"

export function Operator(props?: any){
    return (<>
        <button className="operator">
            {`${props.operator}`}
        </button>
    </>)
}