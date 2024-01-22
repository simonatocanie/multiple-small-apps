import Button from '../Button/Button';
import classes from './Notification.module.css';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { notificationSliceActions } from '../../../store/reducers/notification-reducer';

const Notification = (props) => {
    const dispatch = useDispatch();
    const notification = useSelector(state => state.notification);
    let className = classes.snackbar + ' ';

    switch (props.status) {
        case 'pending':
            className += classes['text-primary'];
            break;
        case 'success':
            className += classes['text-success'];
            break;
        case 'error':
            className += classes['text-danger'];
            break;
        default:
            break;
    }

    useEffect(() => {
        const showNotification = () => {
            const timer = setTimeout(() => {
                dispatch(notificationSliceActions.resetNotificationStatus())
            }, 5000);

            return () => {
                clearTimeout(timer);
            }
        }

        showNotification();

    }, [notification, dispatch])

    return (
        <div className={className}>
            <Button label='X' />
            <p className={classes.title}>{props.title}</p>
            <p className={classes.message}>{props.message}</p>
        </div>
    )
}

export default Notification;