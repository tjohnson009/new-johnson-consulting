import React from 'react'; 
import { Switch, Route } from 'react-router-dom'; 
import './styles/App.css';
import HomePage from './pages/homepage/homepage.component'; 
import ToolsPage from './pages/toolsPage/tools.component'; 
import Header from './components/header/header.component'; 
import SignInSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileRecord } from './firebase/firebase.utilities'; 
// import CheckoutPage from './pages/checkoutPage/checkoutPage.component.jsx'; 

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null; 
  
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({currentUser: user}); 
      // console.log(user); 
      // createUserProfileRecord(user); 
      if (userAuth) {
        const userRef = await createUserProfileRecord(userAuth); 
        
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id, 
              ...snapshot.data()
            }
          })
        })
      } else {
      this.setState({
        currentUser: userAuth
      })
    }
    }); 

  } 

  componentWillUnmount() {
    this.unsubscribeFromAuth(); 
  }

  render() {
    return (
      <div>
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/tools" component={ToolsPage} />
          <Route path="/sign-in" component={SignInSignUpPage} />
          {/* <Route path='/checkout' component={CheckoutPage} /> */}
        </Switch>
      </div>
    );

  }
  
}
export default App;
