import {API_BASE_URL, YELPBEAKER_TOKEN} from './config.js';
import queryString from 'query-string';

export function get(path, queryParams){
    const query = queryString.stringify(queryParams);
    return fetch(`${API_BASE_URL}${path}?${query}`, {
        headers:{
            Authorization: `Bearer ${YELPBEAKER_TOKEN}`,
            Origin: 'localhost',
            withCredentials: true,
        }
    });
}
