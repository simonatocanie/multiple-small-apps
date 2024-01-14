
import React from 'react';
import ReactDom from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onHideModal}></div>
}

const ModalContent = (props) => {
    return (
        <div className={classes.modal}>
            {props.children}
        </div>
    )
}

const idDiv = document.getElementById('modal');
const Modal = (props) => {
    return (
        <>
            {ReactDom.createPortal(<Backdrop onHideModal={props.onHideModal} />, idDiv)}
            {ReactDom.createPortal(<ModalContent>{props.children}</ModalContent>, idDiv)}
        </>
    )
}

export default Modal;