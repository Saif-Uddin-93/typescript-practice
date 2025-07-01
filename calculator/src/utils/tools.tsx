export function createComponents (instances: number, component: React.ReactElement, created: [React.ReactElement]){
    if (instances === created.length){
        return created
    }
    created.push(component)
    return createComponents(instances, component, created)
}