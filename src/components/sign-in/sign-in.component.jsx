import React from 'react'; 
import FormInput from '../form-input/form-input.component'; 
import PersonalizedButton from '../button/personalized-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utilities';


class SignIn extends React.Component {
    constructor() {
        super(); 
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        e.preventDefault();  //this gives us FULL control of what the method does 
        const { name, value } = e.target; 

        this.setState({ [name]: value,  })  // the brackets denote a key and it dynamically sets our property value
    }
    
    handleSubmit = (e) => {
        e.preventDefault(); 
        this.setState({ email: '', password: '' })  //resets the fields
    }
    
    render() {
        return(
            <div className='sign-in'>
                <h2>Sign Into Your Account</h2>
                <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit} action="">
                <FormInput type="email" name='email' label='Email' handleChange={this.handleChange} value={this.state.email} required/>
                
                <FormInput label='Password'
                type="password" name='password'  
                value={this.state.password} handleChange={this.handleChange} 
                required />
                
                <div className="sign-in-buttons">
                
                <PersonalizedButton type="submit" > Sign In </PersonalizedButton>
                <PersonalizedButton onClick={signInWithGoogle} googleSignIn={true} > Sign In With Google </PersonalizedButton>
                
                </div>

                </form>
            </div>
        )
    }
}

export default SignIn; 