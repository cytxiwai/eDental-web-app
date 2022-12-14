import React from 'react';
import styles from './BusinessRating.css';
import Rating from 'react-rating';

export function BusinessRating() {
    return (
        <div className={[`rating`]}>
            <Rating
              emptySymbol="ri-star-line"
              fullSymbol="ri-star-fill"
              fractions={2}
              readonly
              initialRating={3}
            />
            <p>724 reviews</p>
        </div>
    );
}