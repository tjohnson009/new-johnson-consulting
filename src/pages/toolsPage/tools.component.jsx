import React from 'react'; 
// import { withRouter } from 'react-router-dom';
import PRODUCT_DATA from './tools.data'; 
import PreviewPanel from '../../components/preview-panel/preview-panel.component';


class ToolsPage extends React.Component {
    constructor(props) {
        super(props); 
    
        this.state = {
            tools: PRODUCT_DATA, 
        }
    }

    render() {
        const { tools } = this.state; 
        return (
        <div>
            {tools.map(({ id, ...otherPreviewPanelProps }) => {
                return <PreviewPanel key={id} {...otherPreviewPanelProps} />
            }
    )}
        </div>
        )
    }
}

export default ToolsPage; 