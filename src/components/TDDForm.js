import React, { useState, useEffect, useRef } from 'react';

function TDDForm(props) {
    const [input, setInput] = useState('');

    const inputRef = useRef(null);

    const handleChange = e => {
        setInput(e.target.value);
    };

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };

    return (
        <form id="tdd-form" onSubmit={handleSubmit}>
            <input
                type='text'
                id='tdd-input'
                placeholder='O que compraremos hoje?'
                value={input}
                name='text'
                ref={inputRef}
                onChange={handleChange} />
            <button onClick={handleSubmit} id="tdd-btn">Comprar</button>
        </form>
    );
}

export default TDDForm;