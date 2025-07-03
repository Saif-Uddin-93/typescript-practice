import "./style.css"

export function Digit(props?: any){
    return (<>
        <div className="Digit">
            {props.value}
        </div>
    </>)
}