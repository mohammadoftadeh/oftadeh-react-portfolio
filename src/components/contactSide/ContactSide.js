import React from 'react';
import Title from './../title/Title';
import withCustomScroll from './../../hoc/withCustomScroll';

const ContactItem = ({ title, body }) => (
    <li className="d-flex flex-column mb-3">
        <span className="o-font-sm mb-1 o-text-purple">{title}</span>
        <span className="o-font-xs">{body}</span>
    </li>
);

class ContactSide extends React.Component {

    state = {
        fullName: '',
        email: '',
        message: '',
        ContactItems: [
            {id: 1, title: 'E-mail', body: 'example@gmail.com'},
            {id: 2, title: 'Address', body: '121 King Street, Melbourne, Victoria 3000, Australia'},
            {id: 3, title: 'Phone', body: '+012-3456-7891'},
            {id: 4, title: 'Freelance', body: 'Available'},
        ]
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({fullName: '', email: '', message: ''});
    }

render(){
    return(
        <>
            <Title>Contact Me</Title>
            <ul className="list-unstyled o-grid">
                {
                    this.state.ContactItems.map(item => (
                        <ContactItem key={item.id} {...item} />
                    ))
                }
            </ul>
            <div className="leave-Message">
                <Title>Contact Form</Title>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <div className="form-group">
                                <input type="text" className="form-control rounded-0 o-border-purple" name="fullName" placeholder="Full Name" value={this.state.fullName} onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6">
                            <div className="form-group">
                                <input type="email" className="form-control rounded-0 o-border-purple" name="email" placeholder="Email Address" value={this.state.email} onChange={this.handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control rounded-0 o-border-purple" name="message" value={this.state.message} onChange={this.handleChange} placeholder="Your Message"></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="m-3 text-white o-btn text-center py-2 position-relative">Send Message</button>
                    </div>
                </form>
            </div>
        </>
    );
}

}

export default withCustomScroll(ContactSide);