import { useSelector } from "react-redux";
import Aside from "./Aside/Aside";
import Main from "./Main/Main";
import Header from "./Header/Header";
import Notification from "../UI/Notification/Notification";
import classes from './RootLayout.module.css';

const RootLayout = () => {
    const notification = useSelector(state => state.notification)

    return (
        <>
            {notification.isNotificationVisible &&
                <Notification status={notification.status}
                    title={notification.title}
                    message={notification.message} />}
            <div className={classes.layout}>
                <Header />
                <Aside />
                <Main />
                <footer>footer</footer>
            </div>
        </>
    )
}
export default RootLayout;