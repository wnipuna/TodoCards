import { useState } from "react";
import Todo from "./Todo";

const TodoList = () => {
    const [names, setNames] = useState([
        { name: 'Nipuna', id: 1 },
        { name: 'Ruwantha', id: 2 },
        { name: 'Wijesiri', id: 3 }
    ]);

    const deleteTodoHandler = (id) => {
        const newNames = names.filter(name => name.id !== id);
        setNames(newNames);
    }

    return (
        <div>
            <Todo names={names} deleteTodoHandler={deleteTodoHandler} />
        </div>
    );
}

export default TodoList;