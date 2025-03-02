import React, { useState } from "react";

const Index = () => {
    const [message, setMessage] = useState({
        text: "",
        id: ""
    });

    const changeValue = (e) => {
        setMessage({
            ...message,
            text: e.target.value
        });
    };

    const [list, setList] = useState([]);

    const handleAddButton = (e) => {
        e.preventDefault();

        let obj = {
            ...message,
            id: new Date().getTime().toString()
        };

        setList([...list, obj]);

        setMessage({
            text: "",
            id: ""
        });
    };

    const handleDelete = (id) => {
        const filteredData = list.filter((eachId) => eachId.id !== id);
        setList(filteredData);
    };

    const [editValue, setEditValue] = useState({
        id: "",
        isEditValue: false
    });

    const editButton = (id) => {
        let findValue = list.find((each) => each.id === id);
        setMessage({
            text: findValue.text,
            id: findValue.id
        });

        setEditValue({
            id: id,
            isEditValue: true
        });
    };

    const handleSave = (e) => {
        e.preventDefault();

        const updatedTodos = list.map((each) => 
            each.id === editValue.id ? { text: message.text, id: editValue.id } : each
        );

        setList(updatedTodos);
        setMessage({
            text: "",
            id: ""
        });

        setEditValue({
            id: "",
            isEditValue: false
        });
    };

    return (
        <div>
            <h1>To-do List</h1>
            <form>
                <input
                    type="text"
                    name="message"
                    id="message"
                    placeholder="Typing..."
                    value={message.text}
                    onChange={changeValue}
                />
                {editValue.isEditValue ? (
                    <button onClick={handleSave}>Edit</button>
                ) : (
                    <button onClick={handleAddButton}>Add</button>
                )}
            </form>
            <hr />
            <ul>
                {list.map((eachobj) => {
                    const { text, id } = eachobj;
                    return (
                        <li key={id}>
                            <p>{text}</p>
                            <button onClick={() => editButton(id)}>Edit</button>
                            <button onClick={() => handleDelete(id)}>Delete</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Index;
