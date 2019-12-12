import React, {useState} from 'react';
import { FaStream, FaTimes } from 'react-icons/fa';
import BackDrop from '../BackDrop/BackDrop';
import Navbar from '../navbar/Navbar';
import SocialList from '../social/SocialLists';
import Avatar from '../avatar/Avatar';
import './ResponsiveMenu.scss';

const ResponsiveMenu = () => {
    
    const [toggleState, setToggleState] = useState(false);

    function toggle() {
        setToggleState(!toggleState);
        
        if(toggleState)
            document.body.classList.remove('overflow-hidden');
        else
            document.body.classList.add('overflow-hidden');

    }

    return (
        <>
            {toggleState ? <BackDrop toggleFunc={toggle} /> : ''}
            <button onClick={toggle} className="o-toggle-menu d-block d-md-none o-bg-purple text-white rounded-circle position-fixed">
                {toggleState ? <FaTimes /> : <FaStream />}
            </button>
            <div style={toggleState ? {left:0} : {left:'-100%'}} className="responsive-menu overflow-hidden position-fixed bg-white d-block d-md-none">
                <div className="res-back-avatar pt-3 d-flex align-items-center justify-content-center flex-column">
                    <Avatar />
                    <p className="text-white text-center">Hi, I am <strong className="ml-2 o-text-purple">Mohammad Oftadeh</strong></p>
                    <SocialList />
                </div>
                <Navbar flexColumn justifyStart toggleFunc={toggle} />
                <div className="position-absolute copyright pt-2 bg-white">
                    <p className="o-text-purple text-center mb-2">@2019 OftadehTheme</p>
                </div>
            </div>
        </>
    )
};

export default ResponsiveMenu;