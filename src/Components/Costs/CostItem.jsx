import Card from "../UI/Card";
import "./CostItem.css"
import DateItem from "./DateItem";

const CostItem = (props) => {

    return (
        <li>
            <Card className='cost-item'>
                <DateItem
                    date={props.date}
                />
                <div className="cost-item__description">
                    <h2>{props.desc}</h2>
                    <div className="cost-item__price">
                        ${props.price}
                    </div>
                </div>
            </Card>
        </li>
    )
}

export default CostItem
