import { useState, useEffect, useMemo } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/${url}`, {
                    headers: {
                        Authorization: `bearer ${process.env.REACT_APP_API_TOKEN}`,
                    },
                });
                setData(response.data.data);
                //console.log(response.data.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    const memoizedData = useMemo(() => data, [data]);

    return { data: memoizedData, loading, error };
};

export default useFetch;
