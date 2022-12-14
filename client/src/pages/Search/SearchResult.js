import React from 'react';
import {DetailPage} from './DetailPage.js';
import styles from './SearchResult.css';

export function SearchResult(){
    return (
        <div className={[`search-result`]}>
            <DetailPage/>
             <DetailPage/>
              <DetailPage/>
        </div>
    )
}