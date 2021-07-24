import React from 'react'; 
import './panel-item.styles.scss'; 

const PanelItem = ({ name, id, imageURL, price }) => {
    return (
        <div className='panel-item'>
            <div 
            className='panel-item-image'
            style={{backgroundImage: `url(${imageURL}); `}}
            >
            
            </div>
            <div className='addToCart-btn'>

            </div>
            <div className='panel-item-price'>

            </div>
        </div>
    )
};

export default PanelItem; 