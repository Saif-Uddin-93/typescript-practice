import "./style.css"

export function Digit(props?: any){
    return (<>
        <div className="digit">
            {props.value}
        </div>
    </>)
}