import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LoginProvider from './Context/LoginProvider';
import RegisterProvider from './Context/RegisterProvider';

class App extends Component {
  render() {
    return (
      <LoginProvider>
        <RegisterProvider>
          <Switch>
            <Redirect exact from="/" to="/login" />
          </Switch>
        </RegisterProvider>
      </LoginProvider>
    );
  }
}

export default App;
