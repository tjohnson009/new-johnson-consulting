import React from 'react'; 
import './panel-item.styles.scss'; 

const PanelItem = ({ name, id, imageURL, price }) => { //receives an object with arrays
    return (
        <div className='panel-item'>
            <div 
            className='panel-image'
            style={{backgroundImage: `url(${imageURL})`, backgroundPosition: `center`,
            backgroundSize: `cover`}}>
            
            </div>
        <div className='addToCart-btn'>

            </div>
        <div className='panel-footer'>
            <span className='panel-name'>{name}</span>
            <span className='panel-price'>{price}</span>
            </div>
        </div>
    )
};

export default PanelItem; 