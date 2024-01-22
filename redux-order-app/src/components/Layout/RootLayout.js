import Aside from "./Aside/Aside";
import Main from "./Main/Main";
import Header from "./Header/Header";
import classes from './RootLayout.module.css';


const RootLayout = () => {
    return (
        <div className={classes.layout}>
            <Header />
            <Aside />
            <Main />
            <footer>footer</footer>
        </div>
    )
}
export default RootLayout;