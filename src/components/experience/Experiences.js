import React from 'react';
import { FaBriefcase, FaUniversity } from 'react-icons/fa';

const ExperienceItem = ({ time, field, location, description }) => (
    <div className="work__div border-bottom mb-4">
        <div className="o-time-title mb-2 position-relative o-font-sm">{time}</div>
        <div className="o-title-exp mb-2 d-flex flex-column">
            <strong className="font-weight-normal o-text-purple">{field}</strong>
            <small className="text-muted">{location}</small>
        </div>
        <p className="text-justify o-font-sm">{description}</p>
    </div>  
);

class Experiences extends React.Component{

    state = {
        experiences: [
            {id: 1, type: 'work', time: '2016 - Present', field: 'Frontend Web Developer', location: 'Space Company', description: 'Collaborate with creative and development teams on the execution of ideas.'},
            {id: 2, type: 'education', time: '2013 - 2016', field: 'bachelor degree Computer', location: 'MIT', description: 'Collaborate with creative and development teams on the execution of ideas.'},
        ]
    }

    render(){
        return(
            <div className="row">
                <div className="col-12 col-sm-6 col-md-12 col-lg-6 border-right">
                    <div className="mb-4">
                        <i className="o-font-lg align-bottom o-text-purple mr-2"><FaBriefcase /></i>
                        <span className="font-weight-bold">Work Experience</span>
                    </div>
                    {
                        this.state.experiences.filter(item => item.type === 'work').map(item => (
                            <ExperienceItem key={item.id} {...item} />
                        ))
                    }
                </div>
                <div className="col-12 col-sm-6 col-md-12 col-lg-6">
                    <div className="mb-4">
                        <i className="o-font-lg align-bottom o-text-purple mr-2"><FaUniversity /></i>
                        <span className="font-weight-bold">Education</span>
                    </div>
                    {
                        this.state.experiences.filter(item => item.type === 'education').map(item => (
                            <ExperienceItem key={item.id} {...item} />
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Experiences;