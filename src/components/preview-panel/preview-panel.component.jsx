import React from 'react'; 
import './preview-panel.styles.scss'; 
import PanelItem from '../panel-item/panel-item.component'; 

const PreviewPanel = ({ title, reports, coaching }) => { // receives an object, that is inside Tools array
    
    return (
        <div className='preview-panel'>
            <h1 className='panel-title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                reports.filter((report, index) => index < 4)
                .map(({id, ...otherReportItemProps}) => { 
                    return <PanelItem key={id} { ...otherReportItemProps } />;
                })
                }
                { // this line only affects the DISC assessments
                // because the other IDs don't have coaching reports in spot 3 and 4
                coaching.filter(coachingItem => {  
                        return coachingItem.id === 3 || coachingItem.id === 4; 
                    }).map(({id, ...otherCoachingItemProps}) => {
                        return <PanelItem key={id} {...otherCoachingItemProps} />;
                    })
                }
                {/* {  
                coaching.filter((report, index) => index < 2).map(coachingItem => { 
                    return <div key={coachingItem.id}>{coachingItem.name}</div>;
                }) 
                } */}
            </div>
            </div>
        
    )
}


export default PreviewPanel; 