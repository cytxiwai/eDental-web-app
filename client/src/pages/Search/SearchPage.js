import React from 'react';
import {SearchBar} from './searchBar.js';
import styles from './SearchPage.css';
import {SearchResult} from './SearchResult.js';
import useReactRouter from 'use-react-router';

function SearchPage() {

    const {history} = useReactRouter();

    function search(term, location){
        history.push('');
    }
    return (
        <div className={[`searchPage`]}>
            <div className={[`search-area`]}>
                <img/>
                <SearchBar/>
                <hr/>
                <SearchResult/>
            </div>
        </div>
    )
}
export default SearchPage;