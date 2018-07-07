import * as actionTypes from './action';

const initial = {
    ingredients: {
        salad:0,
        bacon:0,
        meat:0,
        cheese:0
    },
    totalprice: 4,
    purchasable:false
};
const INGREDIENT_PRICES= {
    salad: 40,
    cheese:50,
    meat:100,
    bacon:60
};
const reducer = (state=initial,action)=>{

    switch(action.type){
        case actionTypes.ADD_INGREDIENT:
        return {
        ...state,
        ingredients:{
            ...state.ingredients,
            [action.ingredientName]: state.ingredients[action.ingredientName]+1
        },
        totalprice: state.totalprice + INGREDIENT_PRICES[action.ingredientName]
        };
        case actionTypes.REMOVE_INGREDIENT:
        return{
            ...state,
            ingredients:{
                ...state.ingredients,
                [action.ingredientName]: state.ingredients[action.ingredientName]-1
            },
            totalprice: state.totalprice - INGREDIENT_PRICES[action.ingredientName]
        };
        default:
        return state;
    }
    return state;
};

export default reducer;