import React from 'react'; 
import './directory-item.styles.scss'; 


const DirectoryItem = ({ title, imageURL, size }) => {
    return (<div className={`directory-item ${size}`}>
        <div className='background-image' style={{ backgroundImage: `url(${imageURL})` }}>
        
        </div>
                <div className='item-content'>
                    <h1 className='item-title'>{title.toUpperCase()}</h1>
                    <span className='item-subtitle'>EXPLORE</span>
                </div> 
            </div>
    )
}
export default DirectoryItem; 