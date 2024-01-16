import { useCallback, useState } from "react";

const base = 'https://react-food-order-4eb97-default-rtdb.europe-west1.firebasedatabase.app';

const useHttp = () => {
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [wasSuccessfull, setWasSuccessfull] = useState(false);

    const sendRequest = useCallback(async (config, transformData) => {

        try {
            setError('');
            setIsLoading(true)
            const response = await fetch(`${base}/${config.url}`,
                {
                    method: config.method,
                    headers: config.headers,
                    body: JSON.stringify(config.body)
                });

            if (!response.ok) {
                throw new Error('There was an unexpected error');
            }

            setWasSuccessfull(true);
            const responseData = await response.json();

            if (transformData instanceof Function) {
                transformData(responseData);
            }
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
        sendRequest,
        wasSuccessfull
    }
}

export default useHttp;