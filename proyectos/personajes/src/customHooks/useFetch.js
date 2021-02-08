// customHooks funcion personalizada que involucra uno o mas hooks
import { useState, useEffect } from "react";

const BASE_URL = "https://www.breakingbadapi.com/api";

export const useFetch = (endpoint, initialState = []) => { 
        const [data, setData] = useState([initialState]);
        const [fetching, setFeching] = useState(false);
        const [error, setError] = useState(false); // cuando el componente dio error
        const fetchData = async() => {
            try {
                const result = await fetch(`${BASE_URL}/${endpoint}`);
                const data = await result.json();
                setData(data);
                console.log(data)
                setFeching(false);
                setError(false);
                
            } catch (e) {
                setError(true);
                setFeching(false);
                setData({});
            }
        };
        useEffect(() => {
            fetchData();
        },[endpoint])
        return [data, fetching, error];
}
 