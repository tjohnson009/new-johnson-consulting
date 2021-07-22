import React from 'react'; 
import './preview-panel.styles.scss'; 

const PreviewPanel = ({ title, reports, coaching }) => {
    return (
        <div className='panel'>
            <h1 className='panel-title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                reports.filter((report, index) => index < 4).map(report => { 
                    return <div key={report.id}>{report.name}</div>;
                })
                }
                {
                coaching.filter((report, index) => index < 0).map(coachingItem => { 
                    return <div key={coachingItem.id}>{coachingItem.name}</div>;
                })
                }
            </div>
        </div>
    )
};

export default PreviewPanel; 