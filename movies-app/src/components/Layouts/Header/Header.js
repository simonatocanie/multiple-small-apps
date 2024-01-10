
import React from 'react';
import classes from './Header.module.css';

const Header = props => {
    console.log('Header')
    return (
        <header>
            <div className={classes.container}>
                header, some navbar in the future
            </div>
        </header>
    )
}

export default React.memo(Header);