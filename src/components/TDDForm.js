import React, { useState, useEffect, useRef } from 'react';

function TDDForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

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
        <form className="tdd-form" onSubmit={handleSubmit}>
            {
                props.edit ?
                (<>
                    <input
                        type='text'
                        className='tdd-input edit'
                        placeholder='Errou na lista?'
                        value={input}
                        name='text'
                        ref={inputRef}
                        onChange={handleChange}
                    />
                    <button onClick={handleSubmit} className="tdd-btn edit">Editar</button>
                </>) :
                (<>
                    <input
                        type='text'
                        className='tdd-input'
                        placeholder='O que compraremos hoje?'
                        value={input}
                        name='text'
                        ref={inputRef}
                        onChange={handleChange}
                    />
                    <button onClick={handleSubmit} className="tdd-btn">Comprar</button>
                </>)
            }
        </form>
    );
}

export default TDDForm;