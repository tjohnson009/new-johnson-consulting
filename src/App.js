import React from 'react'; 
import { Switch, Route } from 'react-router-dom'; 
import './styles/App.css';
import HomePage from './pages/homepage/homepage.component'; 

const BirkmanPage = () => {
  return (
    <div className="birkmanpage">
      <h1>Birkman Page</h1>
    </div>
  );
};

function App() {
  return (<div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/birkman' component={BirkmanPage} />
      </Switch>
    </div>
  );
}

export default App;
