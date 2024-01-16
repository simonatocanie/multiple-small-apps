import { useCallback, useState } from "react";

const url = 'https://react-food-order-4eb97-default-rtdb.europe-west1.firebasedatabase.app/meals.json';

const useHttp = () => {
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = useCallback(async (config, transformData) => {
        try {
            setError('');
            setIsLoading(true)
            const response = await fetch(url,
                {
                    method: config.method,
                    headers: config.headers,
                    body: JSON.stringify(config.body)
                });


            if (!response.ok) {
                throw new Error('There was an unexpected error');
            }

            const responseData = await response.json()
            transformData(responseData);
        }
        catch (err) {
            setError(err.toString());
        }
        finally {
            setIsLoading(false);
        }
    }, []);

    return {
        error,
        isLoading: isLoading,
        fetchData: fetchData
    }

}

export default useHttp;