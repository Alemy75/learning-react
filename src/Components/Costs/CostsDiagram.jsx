import React from 'react';
import Diagram from "../Diagram/Diagram";

const CostsDiagram = (props) => {

    const diagramDataSets = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0},
    ]

    for (const cost of props.costs) {

        // Получаем id месяца, соответствующий полю label начиная с 0
        const costMonth = cost.date.getMonth()

        diagramDataSets[costMonth].value = parseFloat(diagramDataSets[costMonth].value) + parseFloat(cost.price)

    }

    return <Diagram dataSets={diagramDataSets}/>
}
export default CostsDiagram;