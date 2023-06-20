import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const {data: responseData} = await axios.get(url);
            setData(responseData);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            setError(err.message);
        }
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return ({error, loading, data});
}

export default useFetch;
