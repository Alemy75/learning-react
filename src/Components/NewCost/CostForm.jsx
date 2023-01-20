import React, {useState} from 'react';
import './CostForm.css'


const CostForm = (props) => {
    const [inputName, setInputName] = useState('')
    const [inputCost, setInputCost] = useState('')
    const [inputDate, setInputDate] = useState('')

    const nameChangeHandler = (event) => {
        setInputName(event.target.value)
    }

    const costChangeHandler = (event) => {
        setInputCost(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setInputDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const costData = {
            name: inputName,
            cost: inputCost,
            date: new Date(inputDate)
        }

        props.onSaveCostData(costData)
        setInputName('')
        setInputCost('')
        setInputDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>Название</label>
                    <input
                        type="text"
                        value={inputName}
                        onChange={nameChangeHandler}
                    />
                </div>
                <div className="new-cost__control">
                    <label>Сумма</label>
                    <input
                        type="number"
                        min='0.01'
                        step='0.01'
                        value={inputCost}
                        onChange={costChangeHandler}
                    />
                </div>
                <div className="new-cost__control">
                    <label>Дата</label>
                    <input
                        type="date"
                        min='2019-01-01'
                        step='2023-01-20'
                        value={inputDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-cost__actions">
                <button type='submit'>Добавить расход</button>
            </div>
        </form>
    );
}

export default CostForm;


// Альтернатива для перезаписи
// предидущего состояния через функцию,
// которая возвращает полное предидущее состояние

// setUserInput((previous) => {
//     return {
//         ...previous,
//         name: event.target.value
//     }
// })

// Использование одного состояния

// const [userInput, setUserInput] = useState({
//     name: '',
//     cost: '',
//     date: '',
// })