import CostItems from "./Components/Costs/CostItems";
import NewCost from "./Components/NewCost/NewCost";
import {useState} from "react";

const INITIAL_COSTS = [
    {
        id: 1,
        date: new Date(2021, 2, 12),
        description: 'Холодильник',
        price: 199.99,
    },
    {
        id: 2,
        date: new Date(2021, 2, 11),
        description: 'Пылесос',
        price: 81.79,
    },
    {
        id: 3,
        date: new Date(2021, 2, 10),
        description: 'Сиба',
        price: 0.19,
    },
]

const App = () => {
    const [costs, setCosts] = useState(INITIAL_COSTS)

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
