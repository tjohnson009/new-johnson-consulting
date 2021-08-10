import React from 'react'; 
import FormInput from '../form-input/form-input.component';
import PersonalizedButton from '../button/personalized-button.component';
import { auth, createUserProfileRecord } from '../../firebase/firebase.utilities'; 
import './sign-up.styles.scss'; 

class SignUp extends React.Component {
    constructor() {
        super(); 

        this.state = {
            displayName: '', 
            email: '', 
            password: '', 
            confirmPassword: ''
        }
    }
    
    render() {
        const {displayName, email, password, confirmPassword} = this.state; 
        return (
            <div className='sign-up'>
                <h2 className='title'>I don't have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit='{}this.handleSubmit'>
                    <FormInput type='text' name='displayName' value={displayName} onChange={this.handleChange} label='Display Name' required />
                    
                    <FormInput type='email' name='email' value={email} onChange={this.handleChange} label='Email' required />
                    
                    <FormInput type='password' name='password' value={password} onChange={this.handleChange} label='Password' required />
                    
                    <FormInput type='password' name='confirm-password' value={confirmPassword} onChange={this.handleChange} label='Confirm Password' required />

                </form>
                <PersonalizedButton type='submit'>Sign Up</PersonalizedButton>
            </div>
        )
    }
}

export default SignUp; 