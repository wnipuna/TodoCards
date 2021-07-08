import { useState } from 'react';
import Backdrop from './Backdrop';
import Modal from './Modal';

const Todo = ({ names, deleteTodoHandler }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const deleteHandler = () => {
        setModalIsOpen(true);
    }

    const closeModalHandler = () => {
        setModalIsOpen(false);
    }

    return (
        <div>
            {names.map((name) => (
                <div className='card' key={name.id}>
                    <h2>{name.name}</h2>
                    <div className='actions'>
                        <button className='btn' onClick={deleteHandler}>Delete</button>
                    </div>
                    {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={deleteTodoHandler} id={name.id} />}
                    {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
                </div>

            ))}
            {/* <h2>{props.name}</h2>
        <div className='actions'>
            <button className='btn' onClick={deleteHandler}>Delete</button>
        </div> */}

        </div>
    );
}

export default Todo;