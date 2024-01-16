
import useHttp from '../../hooks/use-https';
import { useEffect, useState } from 'react';
import MealItem from './MealItem/MealItem';
import Card from '../UI/Card/Card';
import Spinner from '../UI/Spinner/Spinner';

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const { error, isLoading, sendRequest: getMeals } = useHttp();


    useEffect(() => {
        const transformData = async (responseData) => {
            let loadedMeals = [];

            for (let key in responseData) {
                loadedMeals.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price,
                })

                setMeals(loadedMeals)
            }
        } //if not can be set outside from useEffect with useCallback

        getMeals({ url: 'meals.json' }, transformData);
    }, [getMeals]);

    const mealList = meals.map((item) =>
        <MealItem item={item} key={item.id} />
    )

    return (
        <Card>
            {error && <p className='text text-danger'>{error}</p>}
            <ul>
                {mealList}
            </ul>
            {isLoading && <Spinner />}
        </Card>
    )
}

export default Meals;