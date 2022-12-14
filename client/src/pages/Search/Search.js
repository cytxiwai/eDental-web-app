import React from 'react';
import useReactRouter from 'use-react-router';
import {SearchResult} from './SearchResult.js';
import {useBusinessSearch} from '../../API/useBusinessSearch.js';



export function Search() {
    const params = new URLSearchParams(location.search);
    const term = params.get('find_desc');
    const locationParam = params.get('find_loc');
    const [business, amountResult, searchParams, setSearchParams] = useBusinessSearch(term, locationParam);

    return (
        <div>
            <SearchResult business={business}/>
        </div>
    )
}