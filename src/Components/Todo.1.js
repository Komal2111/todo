import React from 'react';

export const Todo = () => {

    const [inputValue, setInputValue] = React.useState(" ");
    const [todo, setTodo] = React.useState([]);


    const handleInputValue = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() !== '') {
            setTodo([...todo, inputValue.trim()]);
        }
        setInputValue("");
    };

    const handleDelete = (index) => {
        const updatedtodo = todo.filter((_, i) => i !== index);
        setTodo(updatedtodo);
    };




    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Enter the item' value={inputValue} onChange={handleInputValue}></input>
                <button type='submit'>add</button>
            </form>
            <ul>
                {todo.map((items, index) => <li key={index}>
                    {items}
                    <button onClick={() => handleDelete(index)}>-</button>

                </li>

                )}

            </ul>

        </div>
    );
};
