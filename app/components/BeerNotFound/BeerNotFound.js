import React from 'react';
import styles from './BeerNotFound.scss';

const BeerNotFound = () => {

    return (
        <div className={styles['beer-not-found__container']}>
            <h1>404 Beer Not Found</h1>
        </div>
    );
};
export default BeerNotFound;
