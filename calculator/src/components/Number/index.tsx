import "./style.css"
import { addDigit } from "../CalcDisplay";
import { Digit } from "../Digit";

export function Number(props?: any): React.ReactElement{
    const handleClick = () => {
        console.log(`${props.number} clicked`);
        addDigit(<Digit key={props.number} value={props.number} />);
    }
    return (<>
        <button className="number" onClick={handleClick}>
            {`${props.number}`}
        </button>
    </>)
}

