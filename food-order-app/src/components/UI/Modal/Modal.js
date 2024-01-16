
import ReactDom from 'react-dom';
import classes from './Modal.module.css';

const BackDrop = (props) => {

    return (
        <div className={classes.backdrop} onClick={props.onHideCart}>
        </div>
    )
}

const ModalContent = (props) => {
    return (
        <div className={classes['modal-content']}>
            {props.children}
        </div>
    )
}
const portalId = document.getElementById('modalOverlay');

export const Modal = (props) => {
    return (
        <>
            {ReactDom.createPortal(<BackDrop onHideCart={props.onHideCart} />, portalId)}
            {ReactDom.createPortal(<ModalContent>{props.children}</ModalContent>, portalId)}
        </>
    )
}


export const ModalContainer = (props) => {
    let classList = '';
    const classesSplit = props.className.split(' ');
    classesSplit.map(item => classList += classes[item] + ' ')

    return (
        <div className={classList}>
            {props.children}
        </div>
    )
}


