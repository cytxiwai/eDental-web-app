import React from 'react';
import {SearchBar} from './searchBar.js';
import styles from './SearchPage.css';
import {SearchResult} from './SearchResult.js';
import { useNavigate} from "react-router";
import {Link, useLocation} from "react-router-dom";
import {DetailPage} from './DetailPage.js';
import {useBusinessSearch} from '../../API/useBusinessSearch.js';



function SearchPage() {
    const navigate =  useNavigate();
      const location = useLocation();

    function search(term, location) {
        const urlEncodedTerm = encodeURI(term);
        const urlEncodedLocation = encodeURI(location);
         <Link to={`/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`}></Link>
        }

    return (
        <div className={[`searchPage`]}>
            <div className={[`search-area`]}>
                <img/>
                <SearchBar search={search}/>
                <hr/>
                <SearchResult/>
            </div>
        </div>
    )
}
export default SearchPage;