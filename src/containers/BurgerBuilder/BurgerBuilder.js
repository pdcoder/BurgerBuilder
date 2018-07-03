import React, { Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import axios from '../../axios-orders';
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
        totalprice: 4
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
    }

    purchaseHandler = () =>{
        const order = {
            ingredients = this.state.ingredients,
            price: this.state.totalprice,
            customer:{
                name:"prakash",
                address:{
                    street:"Test street 1",
                    zip:
                }
            }
        }
        axios.post('/orders.json');
    }
    render(){
        return (
    <Aux>
    <Burger ingredients={this.state.ingredients}/>
    <BuildControls 
    ingredientAdded= {this.addIngredients} />
    </Aux>

        );
    }
}

export default BurgerBuilder;