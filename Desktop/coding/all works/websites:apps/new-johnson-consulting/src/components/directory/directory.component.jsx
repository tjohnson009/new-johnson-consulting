import React from 'react'; 
import './directory.styles.scss'; 

class Directory extends React.Component {
       
       constructor() {
           super(); 

           this.state = {
            items: [{
                title: '', 
                    id: 1, 
                imageURL: ''
            }, 
                {
                title: '', 
                id: 2, 
                imageURL: ''
            }, 
                {
                title: '', 
                id: 3, 
                imageURL: ''
            }, 
                {
                title: '', 
                id: 4, 
                imageURL: ''
            }, 
                {
                title: '', 
                id: 5, 
                imageURL: ''
            }, 
            ]
           }
       }
    
}

export default Directory; 