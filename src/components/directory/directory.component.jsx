import React from 'react'; 
import './directory.styles.scss'; 
import DirectoryItem from '../directory-item/directory-item.component'; 

class Directory extends React.Component {
       
       constructor() {
           super(); 
           
           this.state = {
            items: [{
                title: 'Birkman Report', 
                    id: 1, 
                imageURL: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
            }, 
                {
                title: 'StrengthFinders Report', 
                id: 2, 
                imageURL: 'https://images.unsplash.com/photo-1581091877018-dac6a371d50f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
            }, 
                {
                title: 'DISC Report', 
                id: 3, 
                imageURL: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
            }, 
                {
                title: 'Our Tools', 
                id: 4, 
                size: 'large', 
                imageURL: 'https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2555&q=80'
            }, 
                {
                title: 'Our Founder', 
                id: 5, 
                size: 'large', 
                imageURL: 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80'
            }, 
            ]}
       }

       render() {
           return (<div className='directory'>
                 {this.state.items.map(({ title, imageURL, size, id }) => {
                       return <DirectoryItem title={title} key={id} imageURL={imageURL} size={size}/> 
                   })}
               </div>
           )
       }
    
}

export default Directory; 