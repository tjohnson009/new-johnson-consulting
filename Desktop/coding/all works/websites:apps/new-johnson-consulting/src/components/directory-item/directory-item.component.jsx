import React from 'react'; 
import './direct-item.styles.scss'; 

const DirectoryItem = ({ title, subtitle }) => {
    return (<div className='directory-item'>
                <div className='item-content'>
                    <h1 className='item-title'>{title}</h1>
                    <span className='item-subtitle'>Explore</span>
                </div>
            </div>
    )
}
export default DirectoryItem; 