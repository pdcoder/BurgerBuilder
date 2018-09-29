import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
<<<<<<< HEAD

=======
>>>>>>> 9d495daa1a0bedb7580a62196378715ed1a6d186
import * as actions from '../../../store/actions/index';

class Logout extends Component {
    componentDidMount () {
        this.props.onLogout();
    }

    render () {
        return <Redirect to="/"/>;
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    };
};

export default connect(null, mapDispatchToProps)(Logout);