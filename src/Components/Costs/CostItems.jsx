import CostItem from './CostItem'
import './CostItems.css'
import Card from '../UI/Card'
import CostFilter from "./CostFilter";
import {useState} from "react";

const CostItems = (props) => {
    // Состояие для сортировки списка по году
    const [selectedYear, setSelectedYear] = useState('2021')

    // функция изменения состояния для выбранного года
    const onChangeYear = (year) => {
        setSelectedYear(year)
    }

    // Функция, фильтрующая список по году
    const filteredCosts = props.costs.filter(cost => {
        return cost.date
            .getFullYear()
            .toString() === selectedYear
    })

    // Переменная контента
    let costContent = <p className='costs-warning'>По выбранному году расходов не найдено.</p>

    // Изменение контента по условию
    if (filteredCosts.length > 0) {
        costContent = filteredCosts
            .map(cost => (
                <CostItem
                    key={cost.id}
                    date={cost.date}
                    desc={cost.description}
                    price={cost.price}
                />)
            )
    }

    // Разметка компонента
    return (
        <div>
            <Card className='costs'>
                <CostFilter
                    year={selectedYear}
                    onChangeYear={onChangeYear}
                />
                {costContent}
            </Card>
        </div>
    )
}

export default CostItems