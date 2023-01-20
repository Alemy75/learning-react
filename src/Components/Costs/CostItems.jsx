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
				<CostItem
					date={props.costs[0].date}
					desc={props.costs[0].description}
					price={props.costs[0].price}
				/>
				<CostItem
					date={props.costs[1].date}
					desc={props.costs[1].description}
					price={props.costs[1].price}
				/>
				<CostItem
					date={props.costs[2].date}
					desc={props.costs[2].description}
					price={props.costs[2].price}
				/>
			</Card>
		</div>
	)
}

export default CostItems