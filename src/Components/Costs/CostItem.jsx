import Card from "../UI/Card";
import "./CostItem.css"
import DateItem from "./DateItem";
import React, {useState} from 'react'

const CostItem = (props) => {
    const [desc, setDesc] = useState(props.desc);

    const changeDescHandler = () => {
        setDesc('New Desc')
    }

    return (
        <Card className='cost-item'>
            <DateItem
                date={props.date}
            />
            <div className="cost-item__description">
                <h2>{desc}</h2>
                <div className="cost-item__price">
                    ${props.price}
                </div>
            </div>
            <button onClick={changeDescHandler}>Изменить описание</button>
        </Card>
    )
}

export default CostItem
