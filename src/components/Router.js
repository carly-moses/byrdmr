import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Intro from './Intro/Intro';
import ContactForm from './ContactForm/ContactForm';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path= '/' component={App}/>
      <Route exact path='/intro' component={Intro}/>
      <Route exact path='/contact' component={ContactForm}/>
      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>
);

export default Router;