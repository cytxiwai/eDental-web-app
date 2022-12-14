import {useState} from 'react';
import * as api from './yelpAPI.js';

export function useBusinessSearch(term, location) {
    const [business, setBusiness] = useState([]);
    const [amountResult, setAmountResults] = useState();
    const[SearchParams, setSearchParams] = useState({term, location})

    useEffect(() => {
        setBusiness([]);
        const fetchData = async ()=> {
            try{
                const rawData = await api.get('/businesses/search', searchParams)；
                const resp = await rawData.json();
                setBusiness(resp.business);
                setAmountResults(resp.total)
            } catch(e) {
                console.error(e);
            }
        };
        fetchData();
    },[term, location, searchParams]);
    return [business, amountResult, searchParams, setSearchParams];
}