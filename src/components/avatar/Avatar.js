import React from 'react';
import AvatarPortfolio from './../../images/avatar.png';
import './Avatar.scss';

const Avatar = (props) => (
    <>
        <div className={`avatar__img rounded-circle mb-2 ${props.margin ? 'mt-5' : ''}`}>
            <img src={AvatarPortfolio} alt="oftadeh" title="oftadeh" className="rounded-circle" />
        </div>
    </>
);

export default Avatar;