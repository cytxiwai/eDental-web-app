import React from 'react';
import useReactRouter from 'use-react-router';
import {SearchResultSummary} from './SearchResultSummary.js';

export function Search() {
    const {location} = useReactRouter();
    const params = new URLSearchParams(location.search);
    const term = params.get('find_desc');
    const locationParam = params.get('find_loc');

    return (
        <div>
            <SearchResultSummary/>
        </div>
    )
}