
import MealItem from './MealItem/MealItem';
import DUMMY_MEALS from '../../assets/data/meals';
import Card from '../UI/Card/Card';

const Meals = () => {
    const mealList = DUMMY_MEALS.map((item) =>
        <MealItem item={item} key={item.id} />
    )

    return (
        <Card>
            <ul>
                {mealList}
            </ul>
        </Card>
    )
}

export default Meals;