import { cloneElement } from "react"

export function createElements (instances: number, component: React.ReactElement, created: React.ReactElement[] = [], props?: any): React.ReactElement[] 
{
    if (instances === created.length){
        return created
    }

    function addNumber(){
        return {
            key: created.length + 1,
            number: created.length === 10 ? "." : created.length,
        }
    }
    if (props && 'number' in props) {
        props = addNumber()
    }


    const newElement = cloneElement(component, props)
    created.push(newElement)

    return createElements(instances, component, created, props)
}

export function assignNumber(numBtns: React.ReactElement[]): React.ReactElement[] {

    return (numBtns)
}