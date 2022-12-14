import React, {useState} from 'react';
import styles from './searchBar.css';
import { FaSearch } from "react-icons/fa";

export function SearchBar(props){
    const [term, setTerm] = useState(props.term || '');
    const [location, setLocation] = useState(props.location || '');

    const sizeClass = props.small? '' : 'is-medium';

    function Submit(e) {
    if (typeof props.search === 'function'){
        props.search(term, location);
    }
    console.log(term, location)
    e.preventDefault();
    }
    return (
        <form onSubmit={Submit}>
            <div class="field has-addons">
               <p className="control">
                    <div className={`button is-static ${sizeClass}`}>Search</div>
                </p>
                <p className="control">
                    <input className={`input ${sizeClass} ${[`input-control`]}`}
                    onChange={(e) => setTerm(e.target.value)}
                    type="text"
                    placeholder="dentist, cosmetic dentist"
                    />
                </p>
                <div className="control">
                    <div className={`button is-static ${sizeClass}`}>Near</div>
                </div>
                 <p className="control">
                    <input className={`input ${sizeClass} ${[`input-control`]}`}
                    onChange={(e) => setLocation(e.target.value)}
                    type="text"
                    placeholder="where"
                    />
                </p>
                <div className={`button ${sizeClass} ${[`search-button`]}`} onClick={Submit}>
                    <span className="icon is-small"><FaSearch/></span>
                </div>
            </div>
        </form>
    );
};