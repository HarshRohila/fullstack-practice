import React from 'react';
import './SignUpForm.css';
import TextInput from '../TextInput/component';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            userName: '',
            password: '',
            confirmPassword: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        console.log('submitted successfully');
        e.preventDefault();
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <form className="sign-up-form" onSubmit={this.handleSubmit}>
              <TextInput label="First Name" value={this.state.firstName} onChange={this.handleChange}></TextInput>
              <TextInput label="Last Name" value={this.state.lastName} onChange={this.handleChange}></TextInput>
              <TextInput label="User Name" value={this.state.userName} onChange={this.handleChange}></TextInput>
              <TextInput label="Password" type="password" value={this.state.password} onChange={this.handleChange}></TextInput>
              <TextInput label="Confirm Password" type="password" value={this.state.confirmPassword} onChange={this.handleChange}></TextInput>
              <input type="submit"></input>
            </form>
        );        
    }
}

export default SignUpForm;
