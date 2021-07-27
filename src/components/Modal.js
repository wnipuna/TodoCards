const Modal = (props) => {
    console.log(props.id);
    const cancelHandler = () => {
        props.onCancel();
    }

    const confirmHandler = () => {
        props.onConfirm(props.id);
    }


    return <div className='modal'>
        <p>Are you sure?</p>
        <button className='btn btn--alt' onClick={cancelHandler}>Cancel</button>
        <button className='btn' onClick={() => { confirmHandler(); cancelHandler() }}>Confirm</button>
    </div>
}

export default Modal;