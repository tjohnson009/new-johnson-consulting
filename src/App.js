import React from 'react'; 
import { Switch, Route } from 'react-router-dom'; 
import './styles/App.css';
import HomePage from './pages/homepage/homepage.component'; 
import ToolsPage from './pages/toolsPage/tools.component'; 
import Header from '../src/components/header/header.component'; 

function App() {
  return (<div>
    <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/tools' component={ToolsPage} />
      </Switch>
    </div>
  );
}

export default App;
