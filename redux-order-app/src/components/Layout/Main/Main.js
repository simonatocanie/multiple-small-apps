import { Outlet } from "react-router";
import classes from './Main.module.css';

const Main = () => {
    return (
        <main>
            <Outlet />
        </main>
    )
}
export default Main;