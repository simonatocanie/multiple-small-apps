import Aside from "./Aside/Aside";
import Main from "./Main/Main";
import classes from './RootLayout.module.css';


const RootLayout = () => {
    return (
        <div className={classes.layout}>
            <header>header</header>
            <Aside />
            <Main />
            <footer>footer</footer>
        </div>
    )
}
export default RootLayout;