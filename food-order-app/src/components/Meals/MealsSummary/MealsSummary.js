import classes from './MealsSummary.module.css';

const MealsSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>Delicious food delivered to you</h2>
            <p>
                Choose your favourite meal from our selection and enjoy a delicious lunch
                or dinner at home.
                All our meals are cooked with high quality ingredients, just-in-time and of course by experienced chefs.
            </p>
        </section>
    );
}

export default MealsSummary;