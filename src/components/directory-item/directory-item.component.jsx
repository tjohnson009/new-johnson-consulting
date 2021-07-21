import React from 'react'; 
import { withRouter } from 'react-router-dom'; 
import './directory-item.styles.scss'; 


const DirectoryItem = ({ title, imageURL, size, history, linkURL, match }) => {
    return (<div className={`directory-item ${size}`} 
    onClick={() => history.push(`${match.url}${linkURL}`)}>
        <div className='background-image' 
        style={{ backgroundImage: `url(${imageURL})` }}>
        
        </div>
                <div className='item-content'>
                    <h1 className='item-title'>{title.toUpperCase()}</h1>
                    <span className='item-subtitle'>EXPLORE</span>
                </div> 
            </div>
    )
}
export default withRouter(DirectoryItem); 