import { useState, useEffect } from "react";
import { environment } from "../constants";

export const useFetch  = (endpoint,initialState = []) => {
    const [data, setData] = useState(initialState);
    const [fetching, setFeching] = useState(true);
    const [error, setError] = useState(false);

    const fetchData = async() => {
        try {
            setFeching(true);
            const result = await fetch(`${environment.BASE_URL}/${endpoint}`);
            const data = await result.json();
            console.log(data);
            setData(data);
            setFeching(false);
        } catch (e) {
            setData(initialState);
            setFeching(false);
            setError(true);
        }
    }
    useEffect(() => {
        fetchData();
    }, [endpoint]);

    return [data, fetching, error];
};
 