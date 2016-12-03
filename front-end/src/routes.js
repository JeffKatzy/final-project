import React from 'react';
import { Route } from 'react-router';
import App from './App';
import Signup from './components/signup';
import Signin from './components/signin';
import Users from './components/users';
import Songs from './components/songs';


export default (
  <Route path="/" component={App} >
    <Route path="signup" component={Signup} />
    <Route path="signin" component={Signin} />
    <Route path="users" component={Users} />
    <Route path="songs" component={Songs} />
  </Route>
);
