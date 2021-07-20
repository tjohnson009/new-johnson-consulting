import React from 'react'; 
import './directory.styles.scss'; 

class Directory extends React.Component {
       
       constructor() {
           super(); 
           
           this.state = {
            items: [{
                title: 'Birkman Report', 
                    id: 1, 
                imageURL: 'https://unsplash.com/photos/5QgIuuBxKwM'
            }, 
                {
                title: 'StrengthFinders Report', 
                id: 2, 
                imageURL: 'https://unsplash.com/photos/uOhBxB23Wao'
            }, 
                {
                title: 'DISC Report', 
                id: 3, 
                imageURL: 'https://unsplash.com/photos/FlPc9_VocJ4'
            }, 
                {
                title: 'Our Tools', 
                id: 4, 
                imageURL: 'https://unsplash.com/photos/unRkg2jH1j0'
            }, 
                {
                title: 'Meet The Founder', 
                id: 5, 
                imageURL: 'https://unsplash.com/photos/-FPFq_trr2Y'
            }, 
            ]
           }
       }
    
}

export default Directory; 