import React from 'react'; 
import { Switch, Route } from 'react-router-dom'; 
import './styles/App.css';
import HomePage from './pages/homepage/homepage.component'; 
import ToolsPage from './pages/toolsPage/tools.component'; 
import Header from './components/header/header.component'; 
// import CheckoutPage from './pages/checkoutPage/checkoutPage.component.jsx'; 
import SignInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  return (<div>
    <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/tools' component={ToolsPage} />
        <Route path='/sign-in' component={SignInSignUpPage} />
        {/* <Route path='/checkout' component={CheckoutPage} /> */}
      </Switch>
    </div>
  );
}

export default App;
