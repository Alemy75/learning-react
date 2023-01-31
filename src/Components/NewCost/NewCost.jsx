import React from 'react';
import './NewCost.css'
import CostForm from "./CostForm";


const NewCost = (props) => {

    // Функция добавления в список новой покупки
    const onSaveCostData = (inputCostData) => {
        const costData = {
            ...inputCostData,
            id: Math.random()
        }
        props.onAddCost(costData)
    }
    return (
        <div className='new-cost'>
            <CostForm onSaveCostData={onSaveCostData}/>
        </div>
    );
}

export default NewCost