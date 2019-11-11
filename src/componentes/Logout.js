import React from 'react';

export default class Logout extends React.Component {

    componentWillMount(){
        localStorage.removeItem('auth-token');
        this.props.history.push('/timeline');
    }

    render(){
        return null;
    }
}