import React from 'react';
import { Route } from 'react-router';
import App from './App';
import Signup from './components/signup';
import Signin from './components/signin';
import HomePage from './components/homePage'

export default (
  <Route path="/" component={App} >
    <Route path="signup" component={Signup} />
    <Route path="signin" component={Signin} />
    <Route path="signout" />
    <Route path="homepage" component={HomePage} />
  </Route>
);
