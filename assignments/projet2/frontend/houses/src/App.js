import React, { Suspense, lazy } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './assets/bootstrap4/bootstrap.min.css'
import './assets/plugins/font-awesome-4.7.0/css/font-awesome.min.css'

// import { useContext } from "react";
// import { AuthContext } from "./context/AuthContext";
import {useSelector} from "react-redux";

const Admin = lazy(()=> import('./pages/Admin'));
const Home = lazy(()=> import('./pages/home/Home'));
const Profile = lazy(()=> import('./pages/profile/Profile'));
const Login = lazy(()=> import('./pages/auth/login/Login'));

const NoMatchPage = () => {
    return (
        <h3>404 - Not found</h3>
    );
};
function App() {
    // const { user } = useContext(AuthContext);
    const user = useSelector(state => state.user)
    console.log("------->the auth context=--->", user)
  return (
    <Router>
    
    <Suspense fallback={<div> Loading ...</div>} >


        <Switch>

            <Route exact path='/' component={Home}/>
            <Route exact path='/newGemenaye' component={Admin}/>
            <Route  path='/admin' component={Admin}/>
            <Route  path='/login' component={Login}/>
            <Route path="/profile/:username">
                <Profile />
            </Route>
            {/*<Route component={NoMatchPage} />*/}

        </Switch>
            {/*<Newsletter/>*/}
            {/*<Footer/>*/}
    </Suspense>

</Router>
  );
}

export default App;
