
import React from 'react';
import Movies from '../../Movies/Movies';
import classes from './Main.module.css';

const Main = props => {
    console.log('Main')
    return (
        <main>
            <Movies/>
        </main>
    )
}

export default React.memo(Main);