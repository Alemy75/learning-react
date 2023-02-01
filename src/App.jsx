import CostItems from "./Components/Costs/CostItems";
import NewCost from "./Components/NewCost/NewCost";
import {useState} from "react";

// Список покупок
const INITIAL_COSTS = [
    {
        id: 1,
        date: new Date(2020, 1, 12),
        description: 'Холодильник',
        price: 1929.99,
    },
    {
        id: 2,
        date: new Date(2021, 2, 11),
        description: 'Пылесос',
        price: 8101.79,
    },
    {
        id: 3,
        date: new Date(2020, 3, 10),
        description: 'Сиба',
        price: 2230.19,
    },
    {
        id: 4,
        date: new Date(2021, 4, 12),
        description: 'Наушники',
        price: 2199.99,
    },
    {
        id: 5,
        date: new Date(2020, 5, 11),
        description: 'Машина',
        price: 181.79,
    },
    {
        id: 6,
        date: new Date(2020, 6, 10),
        description: 'Колонки',
        price: 10.19,
    },
    {
        id: 7,
        date: new Date(2020, 7, 12),
        description: 'Ноутбук',
        price: 1399.99,
    },
    {
        id: 8,
        date: new Date(2021, 8, 11),
        description: 'Телефон',
        price: 821.79,
    },
    {
        id: 9,
        date: new Date(2022, 9, 10),
        description: 'Курилка',
        price: 1120.19,
    },
    {
        id: 11,
        date: new Date(2019, 10, 12),
        description: 'Вешалка',
        price: 1299.99,
    },
    {
        id: 12,
        date: new Date(2019, 11, 11),
        description: 'Кровать',
        price: 811.79,
    },
    {
        id: 13,
        date: new Date(2019, 12, 10),
        description: 'Лампа',
        price: 3.19,
    },
]

const App = () => {

    // Состояние для списка
    const [costs, setCosts] = useState(INITIAL_COSTS)

    // Функция перезаписи списка покупок
    const addCostHandler = (cost) => {
        setCosts(prevCosts => {
            return [cost, ...prevCosts]
        })
    }

    return (
        <div className="App">
            <NewCost onAddCost={addCostHandler}/>
            <CostItems 
                costs = {costs}
            />
        </div>
    );
};

export default App;
