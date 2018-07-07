import React, { Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import axios from '../../axios-orders';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/spinner';
import withErrorHandler from '../../hoc/witherrorHandler/withErrorHandler';
import {connect} from 'react-redux';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

class BurgerBuilder extends Component{

    state = {
        purchasing: false,
        loading: false,
        error: false
    }
    componentDidMount () { 
        // axios.get('https://burgerbuilder-b802c.firebaseio.com/ingredients.json')
        // .then( response => {
        //     this.setState( { ingredients: response.data } );
        // } )
        // .catch( error => {
        //     this.setState( { error: true } );
        // } );

        
}

    updatePurchaseState(ingredients){
       
        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey];
        }).reduce((sum,el)=>{
            return sum+el;
        },0);
        this.setState({purchasable:sum>0})
    }
   
    purchaseHandler = () =>{
       /* const order = {
            ingredients:this.state.ingredients,
            price: this.state.totalprice,
            customer:{
                name:"prakash",
                address:{
                    street:"Test street 1",
                    zip: '700023',
                    country: 'India'
                }
            },
            delivery: 'fastest'
        }
        axios.post('/orders.json',order).then(response => console.log(response));
        const queryParams  =[];
        for(let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i)+'='+ encodeURIComponent(this.state.ingredients[i]));
        }
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });*/
        this.setState({purchasing:true});

    }

    purchasecancelhandler = () =>{
        this.setState({purchasing:false});
    }

    purchasecontinuehandler = () =>{
        // const queryParams  =[];
        // for(let i in this.state.ingredients){
        //     queryParams.push(encodeURIComponent(i)+'='+ encodeURIComponent(this.state.ingredients[i]));
        // }
        // const queryString = queryParams.join('&');
        // this.props.history.push({
        //     pathname: '/checkout',
        //     search: '?' + queryString
        // });
        this.props.history.push('/checkout');
        }
    render(){
        const disabledinfo = {
            ...this.props.ings
        };
        for(let key in disabledinfo){
            disabledinfo[key]= disabledinfo[key] <= 0
        }


        let ordersummary = null;
        let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;
        if ( this.props.ings ) {
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ings} />
                    <BuildControls
                        ingredientAdded={this.props.onIngredientsAdded}
                        ingredientRemoved={this.props.onIngredientsRemoved}
                        disabled={disabledinfo}
                        purchasable={this.updatePurchaseState(this.props.ings)}
                        ordered={this.purchaseHandler}
                        price={this.props.price} />
                </Aux>
            );
            ordersummary = <OrderSummary
                ingredients={this.props.ings}
                price={this.props.price}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler} />;
        }
        if ( this.state.loading ) {
            ordersummary = <Spinner />;
        }

        return (
    <Aux>
        <Modal modalclossed={this.purchasecancelhandler} show={this.state.purchasing}>
           {ordersummary}
            </Modal>    
    {burger}
    </Aux>

        );
    }
}

const mapStateToProps = state => {
    return{
        ings: state.ingredients,
        price: state.totalPrice
    };
}

const mapDispatchToProps = dispatch =>{
    return {
        onIngredientsAdded: (ingName)=> dispatch({type:actionTypes.ADD_INGREDIENT,ingredientName:ingName}),
        onIngredientsRemoved: (ingName)=> dispatch({type:actionTypes.REMOVE_INGREDIENT,ingredientName:ingName})

    };
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder,axios));