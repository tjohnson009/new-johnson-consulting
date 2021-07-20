import React from 'react';
import './homepage.styles.scss';

const HomePage = () =>
{
    return <div className='homepage'>
        <div className='directory'>
            <div className='directory-item'>
                <div className='item-content'>
                    <h1 className='item-title'>Birkman Report</h1>
                    <span className='item-subtitle'>Explore</span>
                </div>
            </div>
            <div className='directory-item'>
                <div className='item-content'>
                    <h1 className='item-title'>StrengthFinders Report</h1>
                    <span className='item-subtitle'>Explore</span>
                </div>
            </div>
            <div className='directory-item'>
                <div className='item-content'>
                    <h1 className='item-title'>DISC Report</h1>
                    <span className='item-subtitle'>Explore</span>
                </div>
            </div>
            <div className='directory-item'>
                <div className='item-content'>
                    <h1 className='item-title'>The Birkman</h1>
                    <span className='item-subtitle'>Explore</span>
                </div>
            </div>
            <div className='directory-item'>
                <div className='item-content'>
                    <h1 className='item-title'>Meet The Founder</h1>
                    <span className='item-subtitle'>Explore</span>
                </div>
            </div>
        </div>
    </div>
}

export default HomePage;