import React from 'react'; 
import './personalized-button.styles.scss'; 

const PersonalizedButton = ({ children, ...otherProps }) => {
    return (
    <button className='personalized-button' {...otherProps}>
        {children}
    </button>
    )
}; 

export default PersonalizedButton; 