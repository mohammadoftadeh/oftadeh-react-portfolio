import React from 'react';
import Title from './../title/Title';
import Skills from '../skills/Skills';
import Experiences from '../experience/Experiences';
import withCustomScroll from './../../hoc/withCustomScroll';
import './ResumeSide.scss';

const ResumeSide = () => (
    <>
        <Title>My Skills</Title>
            <Skills />
        <Experiences />
    </>
);

export default withCustomScroll(ResumeSide);