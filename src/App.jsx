import CostItems from "./Components/Costs/CostItems";
import NewCost from "./Components/NewCost/NewCost";

const App = () => {

    const costs = [
        {
            date: new Date(2021, 2, 12),
            description: 'Холодильник',
            price: 199.99,
        },
        {
            date: new Date(2021, 2, 11),
            description: 'Пылесос',
            price: 81.79,
        },
        {
            date: new Date(2021, 2, 10),
            description: 'Сиба',
            price: 0.19,
        },
    ]

    const addCostHandler = (cost) => {
        console.log(cost)
        console.log('App comp')
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
