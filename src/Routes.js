import React from 'react';
import { Route } from 'react-router-dom';
import Home from './views/Home';
import Post from './views/Post';
import Login from './views/Login';
import Signup from './views/Signup';

function Routes() {
  return (
   <>
		<Route exact path="/" component={Home} />
		<Route exact path="/post/:id" component={Post} />
		<Route exact path="/login" component={Login} />
		<Route exact path="/signup" component={Signup} />



   </>
  );
}

export default Routes;
