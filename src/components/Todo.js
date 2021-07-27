import { useState } from 'react';
import Backdrop from './Backdrop';
import Modal from './Modal';

const Todo = ({ names, deleteTodoHandler }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [tid, setTid] = useState(0);
    const deleteHandler = () => {
        setModalIsOpen(true);
    }

    const closeModalHandler = () => {
        setModalIsOpen(false);
    }

    const tidHandler = (id) =>{
        setTid(id);
    }

    return (
        <div>
            {names.map((name) => (
                <div className='card' key={name.id}>
                    <h2>{name.name}</h2>
                    <div className='actions'>
                        <button className='btn' onClick={()=>{deleteHandler(); tidHandler(name.id);}}>Delete</button>
                    </div>
                </div>
            ))}
            {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={deleteTodoHandler} id={tid} />}
            {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}

        </div>
    );
}

export default Todo;