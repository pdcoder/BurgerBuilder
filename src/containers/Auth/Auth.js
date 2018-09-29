<<<<<<< HEAD
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './Auth.css';
import * as actions from '../../store/actions/index';
import { updateObject, checkValidity } from '../../shared/utility';

class Auth extends Component {
    state = {
=======
import React,{Component} from 'react';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './Auth.css';
import Spinner from '../../components/UI/Spinner/spinner';
import { Redirect } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';


class Auth extends Component{
    state={
>>>>>>> 9d495daa1a0bedb7580a62196378715ed1a6d186
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
<<<<<<< HEAD
                    placeholder: 'Mail Address'
=======
                    placeholder: 'Mail id'
>>>>>>> 9d495daa1a0bedb7580a62196378715ed1a6d186
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
<<<<<<< HEAD
                    type: 'password',
=======
                    type: 'Password',
>>>>>>> 9d495daa1a0bedb7580a62196378715ed1a6d186
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        },
        isSignup: true
    }

<<<<<<< HEAD
    componentDidMount () {
        if ( !this.props.buildingBurger && this.props.authRedirectPath !== '/' ) {
=======
    componentDidMount() {
        if (!this.props.buildingBurger && this.props.authRedirectPath !== '/') {
>>>>>>> 9d495daa1a0bedb7580a62196378715ed1a6d186
            this.props.onSetAuthRedirectPath();
        }
    }

<<<<<<< HEAD
    inputChangedHandler = ( event, controlName ) => {
        const updatedControls = updateObject( this.state.controls, {
            [controlName]: updateObject( this.state.controls[controlName], {
                value: event.target.value,
                valid: checkValidity( event.target.value, this.state.controls[controlName].validation ),
                touched: true
            } )
        } );
        this.setState( { controls: updatedControls } );
    }
=======
    checkValidity ( value, rules ) {
        let isValid = true;
        if ( !rules ) {
            return true;
        }

        if ( rules.required ) {
            isValid = value.trim() !== '' && isValid;
        }

        if ( rules.minLength ) {
            isValid = value.length >= rules.minLength && isValid
        }

        if ( rules.maxLength ) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if ( rules.isEmail ) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test( value ) && isValid
        }

        if ( rules.isNumeric ) {
            const pattern = /^\d+$/;
            isValid = pattern.test( value ) && isValid
        }

        return isValid;
    }

    inputChangedHandler = ( event, controlName ) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity( event.target.value, this.state.controls[controlName].validation ),
                touched: true
            }
        };
        this.setState( { controls: updatedControls } );
    }  
>>>>>>> 9d495daa1a0bedb7580a62196378715ed1a6d186

    submitHandler = ( event ) => {
        event.preventDefault();
        this.props.onAuth( this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup );
    }

    switchAuthModeHandler = () => {
<<<<<<< HEAD
        this.setState( prevState => {
            return { isSignup: !prevState.isSignup };
        } );
    }

    render () {
        const formElementsArray = [];
        for ( let key in this.state.controls ) {
            formElementsArray.push( {
                id: key,
                config: this.state.controls[key]
            } );
        }

        let form = formElementsArray.map( formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={( event ) => this.inputChangedHandler( event, formElement.id )} />
        ) );

        if ( this.props.loading ) {
=======
        this.setState(prevState => {
            return {isSignup: !prevState.isSignup};
        });
    }


    render(){
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        let form = formElementsArray.map(formElement=>(
            <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
        ));

        if (this.props.loading) {
>>>>>>> 9d495daa1a0bedb7580a62196378715ed1a6d186
            form = <Spinner />
        }

        let errorMessage = null;

<<<<<<< HEAD
        if ( this.props.error ) {
=======
        if (this.props.error) {
>>>>>>> 9d495daa1a0bedb7580a62196378715ed1a6d186
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }

        let authRedirect = null;
<<<<<<< HEAD
        if ( this.props.isAuthenticated ) {
            authRedirect = <Redirect to={this.props.authRedirectPath} />
        }

        return (
            <div className={classes.Auth}>
                {authRedirect}
                {errorMessage}
                <form onSubmit={this.submitHandler}>
                    {form}
                    <Button btnType="Success">SUBMIT</Button>
                </form>
                <Button
                    clicked={this.switchAuthModeHandler}
                    btnType="Danger">SWITCH TO {this.state.isSignup ? 'SIGNIN' : 'SIGNUP'}</Button>
            </div>
=======
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to={this.props.authRedirectPath}/>
        }


        return(
            <div className={classes.Auth}>
             {authRedirect}
                {errorMessage}
                <form onSubmit={this.submitHandler}>
{form}
            <Button btnType="Success">SUBMIT</Button>

                    </form>
                    <Button 
                    clicked={this.switchAuthModeHandler}
                    btnType="Danger">SWITCH TO {this.state.isSignup ? 'SIGNIN' : 'SIGNUP'}</Button>
                    </div>

>>>>>>> 9d495daa1a0bedb7580a62196378715ed1a6d186
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        buildingBurger: state.burgerBuilder.building,
        authRedirectPath: state.auth.authRedirectPath
    };
};

<<<<<<< HEAD
const mapDispatchToProps = dispatch => {
    return {
        onAuth: ( email, password, isSignup ) => dispatch( actions.auth( email, password, isSignup ) ),
        onSetAuthRedirectPath: () => dispatch( actions.setAuthRedirectPath( '/' ) )
=======

const mapDispatchToProps = dispatch => {
    return {
        onAuth: ( email, password, isSignup ) => dispatch( actions.auth( email, password, isSignup ) ),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
>>>>>>> 9d495daa1a0bedb7580a62196378715ed1a6d186
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Auth );