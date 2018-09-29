<<<<<<< HEAD
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
=======
import React,{Component} from 'react';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import axios from '../../axios-orders';
import witherrorHandler from '../../hoc/witherrorHandler/withErrorHandler';
import classes from './Orders.css';
import Spinner from '../../components/UI/Spinner/spinner';
import Order from '../../components/Order/Order';


>>>>>>> 9d495daa1a0bedb7580a62196378715ed1a6d186

class Orders extends Component {
    componentDidMount () {
        this.props.onFetchOrders(this.props.token, this.props.userId);
    }

    render () {
        let orders = <Spinner />;
        if ( !this.props.loading ) {
            orders = this.props.orders.map( order => (
                <Order
                    key={order.id}
                    ingredients={order.ingredients}
                    price={order.price} />
            ) )
        }
        return (
            <div>
                {orders}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token, userId) => dispatch( actions.fetchOrders(token, userId) )
    };
};

<<<<<<< HEAD
export default connect( mapStateToProps, mapDispatchToProps )( withErrorHandler( Orders, axios ) );
=======
export default connect( mapStateToProps, mapDispatchToProps )( witherrorHandler( Orders, axios ) );
>>>>>>> 9d495daa1a0bedb7580a62196378715ed1a6d186
