import React from 'react'; 
import './directory-item.styles.scss'; 

const DirectoryItem = ({ title, imageURL, size }) => {
    return (<div style={{ backgroundImage: `url(${imageURL})` }} 
    className={`directory-item ${size}`}>
                <div className='item-content'>
                    <h1 className='item-title'>{title}</h1>
                    <span className='item-subtitle'>Explore</span>
                </div> 
            </div>
    )
}
export default DirectoryItem; 