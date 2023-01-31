import React, {useState} from 'react';
import './NewCost.css'
import CostForm from "./CostForm";


const NewCost = (props) => {

    // Состояние для видимости формы
    const [isFormVisible, setIsFormVisible] = useState(false)

    // Функция добавления в список новой покупки
    const onSaveCostData = (inputCostData) => {
        const costData = {
            ...inputCostData,
            id: Math.random()
        }
        props.onAddCost(costData)
        setIsFormVisible(false)
    }

    // Включение формы
    const inputCostDataHandler = () => {
        setIsFormVisible(true)
    }

    // Выключение формы
    const cancelCostHandler = () => {
        setIsFormVisible(false)
    }

    // Разметка компонента
    return (
        <div className='new-cost'>
            {!isFormVisible &&
                <button onClick={inputCostDataHandler}>
                    Добавить новый расход
                </button>}
            {isFormVisible &&
            <CostForm
                cancelCostHandler={cancelCostHandler}
                onSaveCostData={onSaveCostData}
            />}

        </div>
    );
}

export default NewCost