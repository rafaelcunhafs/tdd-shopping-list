import React, { useState } from 'react';
import TDDForm from './TDDForm';
import TDDItems from './TDDItems';

function TDDShoppingList() {
    const [items, setItems] = useState([]);

    const addItem = item => {
        if(!item.text || /^\s*$/.test(item.text))
            return;

        const newItems = [item, ...items];
        setItems(newItems);
    };

    const completeItem = id => {
        let updateItems = items.map(item => {
            if(item.id === id)
                item.isComplete = !item.isComplete

            return item;
        });

        setItems(updateItems);
    };

    return (
        <div>
            <h1>Lista de compras</h1>
            <TDDForm onSubmit={addItem} />
            <TDDItems items={items} completeItem={completeItem} />
        </div>
    );
}
  
export default TDDShoppingList;