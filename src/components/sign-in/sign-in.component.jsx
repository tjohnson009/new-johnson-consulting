import React from 'react'; 

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
                <label htmlFor="email">Email: </label>
                <input type="email" name='email' onChange={this.handleChange} value={this.state.email} required/>

                <label htmlFor="email">Password: </label>
                <input 
                type="password" name='password'  
                value={this.state.password} onChange={this.handleChange} 
                required/>
                
                <input type="submit" value="Submit Form" />
                </form>
            </div>
        )
    }
}

export default SignIn; 