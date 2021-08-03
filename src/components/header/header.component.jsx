import React from 'react'; 
import { Link } from 'react-router-dom';
import './header.styles.scss'; 
import { ReactComponent as Logo } from '../../assets/half-white.svg'; 
import { auth } from '../../firebase/firebase.utilities'; 

const Header = ({ currentUser }) => {
    return (
        <div className='header'>
        <div className='logo-container'>
            <Link to='/'>
                <Logo className='logo'/>
            </Link>
        </div>
        <div className='link-container'>
            <Link  to='/tools'className='link'>Tools</Link>
    
    {
    currentUser ? <div className='link' onClick={() => auth.signOut()}>Sign Out</div> :
    <Link to='/sign-in' className='link'>Sign In</Link>
    }

            <Link  to='/cart' className='link'>Cart</Link>
        </div>
        </div>
    )
}

export default Header; 