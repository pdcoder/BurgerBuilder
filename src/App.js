import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
<<<<<<< HEAD
import asyncComponent from './hoc/asyncComponent/asyncComponent';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';

=======
import * as actions from './store/actions/index';
import Logout from './containers/Auth/Logout/Logout';

import Checkout from './containers/Checkout/Checkout';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
>>>>>>> 9d495daa1a0bedb7580a62196378715ed1a6d186
const asyncCheckout = asyncComponent(() => {
  return import('./containers/Checkout/Checkout');
});

const asyncOrders = asyncComponent(() => {
  return import('./containers/Orders/Orders');
});

const asyncAuth = asyncComponent(() => {
  return import('./containers/Auth/Auth');
});
<<<<<<< HEAD

=======
>>>>>>> 9d495daa1a0bedb7580a62196378715ed1a6d186
class App extends Component {
  componentDidMount () {
    this.props.onTryAutoSignup();
  }
<<<<<<< HEAD

  render () {
=======
  render () {

>>>>>>> 9d495daa1a0bedb7580a62196378715ed1a6d186
    let routes = (
      <Switch>
        <Route path="/auth" component={asyncAuth} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    );

    if ( this.props.isAuthenticated ) {
      routes = (
        <Switch>
<<<<<<< HEAD
          <Route path="/checkout" component={asyncCheckout} />
          <Route path="/orders" component={asyncOrders} />
=======
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
>>>>>>> 9d495daa1a0bedb7580a62196378715ed1a6d186
          <Route path="/logout" component={Logout} />
          <Route path="/auth" component={asyncAuth} />
          <Route path="/" exact component={BurgerBuilder} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return (
      <div>
        <Layout>
<<<<<<< HEAD
          {routes}
=======
        {routes}
>>>>>>> 9d495daa1a0bedb7580a62196378715ed1a6d186
        </Layout>
      </div>
    );
  }
}

<<<<<<< HEAD
=======

>>>>>>> 9d495daa1a0bedb7580a62196378715ed1a6d186
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch( actions.authCheckState() )
  };
};

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( App ) );
