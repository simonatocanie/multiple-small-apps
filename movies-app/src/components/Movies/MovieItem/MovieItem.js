import classes from './MovieItem.module.css'

const MovieItem = ({ item }) => {
    return (
        <div className={classes.column} key={item.id}>
            <h3>{item.title}</h3>
            <span> <b>ReleaseDate:</b> {item.release_date}</span>
            <span> <b> Description:</b> {item.opening_crawl}</span>
        </div>
    )
}

export default MovieItem;