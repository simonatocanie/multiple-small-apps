import classes from './MovieItem.module.css'

const MovieItem = ({ item }) => {

    return (
        <div className={classes.column}>
            <h3>{item.title}</h3>
            <span> <b>ReleaseDate:</b> {item.releaseDate}</span>
            <span> <b> Description:</b> {item.openingText}</span>
        </div>
    )
}

export default MovieItem;