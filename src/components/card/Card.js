import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import { FaLink, FaSearchPlus } from 'react-icons/fa';
import './Card.scss';

const Card = (props) => {

    const [toggler, setToggler] = useState(false);

    return(
        <>
            <div className="o-card text-center">
                <div className="mb-2 position-relative overflow-hidden">
                    <img src={props.thumbnail} alt="oftadeh" title="oftadeh" />
                    <span className="o-hover-overlay d-flex align-items-center justify-content-center">
                        <a href={props.url} className="rounded-circle bg-white m-1 o-text-purple">
                            <FaLink />
                        </a>
                        <button className="rounded-circle bg-white m-1 o-text-purple" onClick={ () => setToggler(!toggler) }>
                            <FaSearchPlus />
                        </button>
                    </span>
                    <FsLightbox
                        toggler={ toggler }
                        sources={[props.full]}
                    />
                </div>
                <p className="mb-0">{props.title}</p>
                <small className="o-text-purple d-block mb-4">{props.category}</small>
            </div>
        </>
    );
}

export default Card;