<<<<<<< HEAD
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace( '/checkout/contact-data' );
    }

    render () {
        let summary = <Redirect to="/" />
        if ( this.props.ings ) {
            const purchasedRedirect = this.props.purchased ? <Redirect to="/"/> : null;
            summary = (
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary
                        ingredients={this.props.ings}
                        checkoutCancelled={this.checkoutCancelledHandler}
                        checkoutContinued={this.checkoutContinuedHandler} />
                    <Route
                        path={this.props.match.path + '/contact-data'}
                        component={ContactData} />
                </div>
            );
        }
        return summary;
    }
=======
import React, { Component} from 'react';
import {Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';
import ContactData from '../../containers/Checkout/ContactData/ContactData';
import * as actions from '../../store/actions/index';

class Checkout extends Component{
    // state = {
    //     ingredients: null,
    //     price: 0
    // }

    // componentDidMount(){
    //     const query = new URLSearchParams(this.props.location.search);
    //     const ingredients = {};
    //     let price = 0;

    //     for ( let param of query.entries() ) {
    //         // ['salad', '1']
    //         if (param[0] === 'price') {
    //             price = param[1];
    //         } else {
    //             ingredients[param[0]] = +param[1];
    //         }
    //     }
    //     this.setState( { ingredients: ingredients, totalPrice: price } );
    // }

    checkoutCancelledHandler = () =>{
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () =>{
        this.props.history.replace('/checkout/contact-data');
    }



render(){
    let summary = <Redirect to="/" />
    if ( this.props.ings ) {
        const purchasedRedirect = this.props.purchased ? <Redirect to="/"/> : null;
        summary = (
            <div>
                {purchasedRedirect}
                <CheckoutSummary
                    ingredients={this.props.ings}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler} />
                <Route
                    path={this.props.match.path + '/contact-data'}
                    component={ContactData} />
            </div>
        );
    }
    return summary;
}

>>>>>>> 9d495daa1a0bedb7580a62196378715ed1a6d186
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
};

<<<<<<< HEAD
export default connect( mapStateToProps )( Checkout );
=======
export default connect(mapStateToProps)(Checkout);
>>>>>>> 9d495daa1a0bedb7580a62196378715ed1a6d186
