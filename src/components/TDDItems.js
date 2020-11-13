import React from 'react';
import { FaCartPlus } from 'react-icons/fa';

const TDDItems = ({ items, completeItem }) => {

    return items.map((item, index) => (
        <div className={item.isComplete ? 'tdd-item-row complete' : 'tdd-item-row'} key={index}>
            <div key={item.id}>
                {item.text}
            </div>

            <div className='tdd-icons'>
                <FaCartPlus
                    onClick={() => completeItem(item.id)}
                    className='tdd-icon tdd-buy'
                />
            </div>
        </div>
    ));
};

export default TDDItems;