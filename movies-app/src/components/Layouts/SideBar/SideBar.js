import React, { useContext } from 'react';
import Button from '../../UI/Button/Button';
import MoviesContext from '../../../store/movies-context';
import classes from './SideBar.module.css';

const SideBar = props => {
    console.log('sidebar')
    const ctxMovie = useContext(MoviesContext);

    const onGetMoviesHandler = (event) => {
        // event.preventDefault();
        console.log('movie list');
        console.log(ctxMovie);
    }
    return (
        <aside>
            <ul>
                <li>
                    <Button className='button sidebar' label='Movie List' onClick={onGetMoviesHandler} />
                </li>
                <li>
                    <Button className='button sidebar' label='Another List' />
                </li>
                <li>
                    <Button className='button sidebar' label='Test list' />
                </li>
            </ul>
        </aside>
    )
}

export default React.memo(SideBar);  