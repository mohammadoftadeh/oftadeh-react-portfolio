import React from 'react';
import './BackDrop.scss';

const BackDrop = (props) => (
    <>
        <div onClick={props.toggleFunc} className="o-backdrop" />
    </>
);

export default BackDrop;