import React from 'react';

const SkillItem = ({ title, percent }) => (
    <li className="mb-3">
        <strong className="o-font-sm font-weight-normal">{title}</strong>
        <div className="progress">
            <div className="progress-bar o-bg-purple" role="progressbar" style={{width: `${percent}%`}} aria-valuenow={percent} aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </li>
);

class Skills extends React.Component{

    state = {
        skills: [
            {id: 1, title: 'HTML5', percent: '25'},
            {id: 2, title: 'CSS3', percent: '50'},
            {id: 3, title: 'JAVASCRIPT', percent: '75'},
            {id: 4, title: 'JQUERY', percent: '100'},
            {id: 5, title: 'REACTJS', percent: '25'},
            {id: 6, title: 'PHP', percent: '50'},
            {id: 7, title: 'UI & UX', percent: '75'},
            {id: 8, title: 'NODEJS', percent: '100'},
        ]
    }

    render(){
        return(
            <>
                <ul className="list-unstyled mb-5 o-grid">
                    {
                        this.state.skills.map(item => (
                            <SkillItem key={item.id} {...item} />
                        ))
                    }
                </ul>
            </>
        );
    }
}

export default Skills;