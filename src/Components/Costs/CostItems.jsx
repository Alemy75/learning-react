import CostItem from './CostItem'
import './CostItems.css'
import Card from '../UI/Card'
import CostFilter from "./CostFilter";
import {useState} from "react";

const CostItems = (props) => {
    const [selectedYear, setSelectedYear] = useState('2021')


    const onChangeYear = (year) => {
        setSelectedYear(year)
    }

    return (
        <div>
            <Card className='costs'>
                <CostFilter
                    year={selectedYear}
                    onChangeYear={onChangeYear}
                />
                {
                    props.costs.map((cost) => (
                        <CostItem
                            key={cost.id}
                            date={cost.date}
                            desc={cost.description}
                            price={cost.price}
                        />)
                    )
                }

            </Card>
        </div>
    )
}

export default CostItems