import CostItems from "./Components/Costs/CostItems";

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

    return (
        <div className="App">
            <CostItems 
                costs = {costs}
            />
        </div>
    );
};

export default App;
