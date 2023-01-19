import CostItem from './CostItem'
import './CostItems.css'

const CostItems = (props) => {
	return (
		<div className='costs'>
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
		</div>
	)
}

export default CostItems