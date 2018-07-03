import React, { Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import axios from '../../axios-orders';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
const INGREDIENT_PRICES= {
    salad: 40,
    cheese:50,
    meat:100,
    bacon:60
};
class BurgerBuilder extends Component{

    state={
        ingredients:{
            salad: 0,
            bacon: 0,
            cheese:0,
            meat:0
        },
        totalprice: 4,
        loading:false,
        purchasable:false,
        purchasing:false
    }

    updatePurchaseState(ingredients){
        const ingredients = {
            ...this.state.ingredients
        };
        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey];
        }).reduce((sum,el)=>{
            return sum+el
        },0);
        this.setState({purchasable:sum>0})
    }
    addIngredients = (type) => {
        const old = this.state.ingredients[type];
        const newupdated = old+1;
        const updated = {
            ...this.state.ingredients
        };
        updated[type] = newupdated;
        const priceAddition= INGREDIENT_PRICES[type];
        const oldprice = this.state.totalprice;
        const newprice = oldprice+priceAddition;
        this.setState({totalprice:newprice,ingredients:updated});
        this.updatePurchaseState(updated);
    }

    removeingredients = (type) =>{
        const old = this.state.ingredients[type];
        if(old<=0)
        {
            return;
        }
        const newupdated = old-1;
        const updated = {
            ...this.state.ingredients
        };
        updated[type] = newupdated;
        const priceAddition= INGREDIENT_PRICES[type];
        const oldprice = this.state.totalprice;
        const newprice = oldprice-priceAddition;
        this.setState({totalprice:newprice,ingredients:updated});
        this.updatePurchaseState(updated);
    }
    purchaseHandler = () =>{
        const order = {
            ingredients = this.state.ingredients,
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
    }

    purchasecancelhandler = () =>{
        this.setState({purchasing:false});
    }
    render(){
        const disabledinfo = {
            ...this.state.ingredients
        };
        for(let key in disabledinfo){
            disabledinfo[key]= disabledinfo[key] <= 0
        }
        return (
    <Aux>
        <Modal modalclossed={this.purchasecancelhandler} show={this.state.purchasing}>
            <OrderSummary ingredients={this.state.ingredients}/>
            </Modal>
    <Burger ingredients={this.state.ingredients}/>
    <BuildControls 
    ingredientAdded= {this.addIngredients} 
    ingredientsRemoved={this.removeingredients}
    purchasable={this.state.purchasable}
    disabled={disabledinfo}
    ordered={this.purchaseHandler}
    price={this.state.totalprice}/>
    </Aux>

        );
    }
}

export default BurgerBuilder;