import CostList from './CostList'
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

    // Разметка компонента
    return (
        <div>
            <Card className='costs'>
                <CostFilter
                    year={selectedYear}
                    onChangeYear={onChangeYear}
                />
                <CostList costs={filteredCosts}/>
            </Card>
        </div>
    )
}

export default CostItems