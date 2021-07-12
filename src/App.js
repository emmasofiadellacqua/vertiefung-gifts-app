import Home_page from './pages/Home_page';
import Login_page from './pages/Login_page';
import Registration_page from './pages/Registration_page';
import Intro_page_1 from './pages/Intro_page_1';
import Intro_page_2 from './pages/Intro_page_2';
import Intro_page_3 from './pages/Intro_page_3';
import Results_page from './pages/Results_page';
import PrivateRoute from "./components/PrivateRoute";
import Intro_page from "./pages/Intro_page";
import Occasions_page from "./pages/Occasions_page";
import Interests_page from "./pages/Interests_page";
import Calendar_page from './pages/Calendar_page';
import Profile_page from "./pages/Profile_page";
import Item_view from "./pages/Item_view";
import Checkout_page from "./pages/Checkout_page";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { AuthProvider } from './components/Auth';
import React from 'react';


const App = () => {
  return (
  <AuthProvider>
    <Router>
    <div> 
    <Switch>
      <Route exact path="/" component={Intro_page}/>
      <PrivateRoute path="/Home_page" component={Home_page}/>
      <Route path='/Login_page' component={Login_page}/>
      <Route path='/Registration_page' component={Registration_page}/>
      <Route path='/Results_page' component={Results_page}/>
      <Route path='/Intro_page_1' component={Intro_page_1}/>
      <Route path='/Intro_page_2' component={Intro_page_2}/>
      <Route path='/Intro_page_3' component={Intro_page_3}/>
      <Route path='/Occasions_page' component={Occasions_page}/>
      <Route path='/Interests_page' component={Interests_page}/>
      <Route path='/Calendar_page' component={Calendar_page}/>
      <Route path='/Profile_page' component={Profile_page}/>
      <Route path='/Item_view' component={Item_view}/>
      <Route path='/Checkout_page' component={Checkout_page}/>
    </Switch>
    </div>
    </Router>
  </AuthProvider>
  );
};


export default App;
