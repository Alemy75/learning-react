import React from 'react';
import CostItem from "./CostItem";
import './CostList.css'

const CostList = (props) => {

    // Условие на наличие элементов в списке
    if (props.costs.length === 0) {
        return <h2 className='cost-list__fallback'>
            По выбранному году расходов не найдено.
        </h2>
    }

    // Вывод покупок
    else return (
        <ul className='cost-list'>
            {
                props.costs
                    .map(cost => (
                        <CostItem
                            key={cost.id}
                            date={cost.date}
                            desc={cost.description}
                            price={cost.price}
                        />)
                    )
            }
        </ul>
    )
};

export default CostList;