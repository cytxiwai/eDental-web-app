import React from 'react';
import styles from './DetailPage.css';
import {BusinessRating} from './BusinessRating.js';

export function DetailPage() {
    return (
        <div className={[`detail-page`]}>
            <img src="https://via.placeholder.com/210" alt="business" className={[`business-image`]}/>
            <div className={[`business-info`]}>
                <h2 className="subtitle">Dentist</h2>
                <BusinessRating/>
            </div>
            <div className={[`contact-info`]}>
                <p>+14081</p>
                <p>Example Street</p>
                <p>12345 City</p>
            </div>
        </div>
    );
}