export function createElements (instances: number, component: React.ReactElement, created: React.ReactElement[] = []){
    if (instances === created.length){
        return created
    }
    created.push(component)
    return createElements(instances, component, created)
}