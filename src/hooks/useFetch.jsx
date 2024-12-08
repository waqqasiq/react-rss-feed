import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url, page = 1, limit = 10) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${url}?page=${page}&limit=${limit}`);
                setData(response.data);
            } catch (err) {
                setError(err);
                console.error('Error fetching data:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, page, limit]);

    return { data, loading, error };
};

export default useFetch;