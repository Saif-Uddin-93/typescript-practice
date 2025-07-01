import { cloneElement } from "react"

export function createElements (instances: number, component: React.ReactElement, created: React.ReactElement[] = []): React.ReactElement[] 
{
    if (instances === created.length){
        return created
    }

    const props = {
        key: created.length+1,
        label: created.length+1
    };

    const newElement = cloneElement(component, props)
    created.push(newElement)

    return createElements(instances, component, created)
}


// for (let i =0; i < 10; i++){
//     console.log(i)
// }