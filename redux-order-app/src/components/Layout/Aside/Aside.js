import { Link } from 'react-router-dom';
import  './Aside.module.css';

const Aside = () => {
    return (
        <aside>
            <ul>
                <li>
                    <Link to='/' >Counter</Link>
                </li>
                <li>
                    <Link to='/order-app' >Order Logic</Link>
                </li>
            </ul>
        </aside>
    )
}
export default Aside;