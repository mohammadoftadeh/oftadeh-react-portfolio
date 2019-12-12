import React from 'react';
import './CardList.scss';

const CardList = ({ children }) => (
    <>
        <div className="o-masonry">
            {children}                        
        </div>
    </>
);

export default CardList;