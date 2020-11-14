import React, { useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import TDDForm from './TDDForm';

const TDDItems = ({ items, completeItem, removeItem, updateItem }) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateItem(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    }

    if(edit.id) {
        return <TDDForm edit={edit} onSubmit={submitUpdate} />;
    }

    return items.map((item, index) => (
        <div className={item.isComplete ? 'tdd-item-row complete' : 'tdd-item-row'} key={index}>
            <div key={item.id}>
                {item.text}
            </div>

            <div className='tdd-icons'>
                <TiEdit
                    onClick={() => setEdit({ id: item.id, value: item.text })}
                    className='tdd-icon tdd-edit'
                />

                <FaCartPlus
                    onClick={() => completeItem(item.id)}
                    className='tdd-icon tdd-buy'
                />

                <RiCloseCircleLine
                    onClick={() => removeItem(item.id)}
                    className='tdd-icon tdd-remove'
                />
            </div>
        </div>
    ));
};

export default TDDItems;