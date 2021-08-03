import React from 'react'; 
import './personalized-button.styles.scss'; 

const PersonalizedButton = ({ children, googleSignIn, ...otherProps }) => {
    return (
    <button className={ `${googleSignIn ? 'google-sign-in' : ''} personalized-button`} {...otherProps}>
        {children}
    </button>
    )
}; 

export default PersonalizedButton; 