import React, { Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
class BurgerBuilder extends Component{

    state={
        ingredients:{
            salad: 1,
            bacon: 2,
            cheese: 3,
            meat:4
        }
    }
    render(){
        return (
    <Aux>
    <Burger ingredients={this.state.ingredients}/>
    <BuildControls/>
    </Aux>

        );
    }
}

export default BurgerBuilder;