import React from 'react';


export default class Login extends React.Component {
    
    constructor(){
        super();
        this.state ={erro:''};
    }
    
    render(){
        return(
            <div className="login-box">
                <h1 className="header-logo">Instadrigo</h1>
                <span>{this.state.erro}</span>
                <form onSubmit={this.envia.bind(this)}> 
                    <input type="text" ref={input => this.login = input}/>
                    <input type="password" ref={input => this.senha = input}/>
                    <input type="submit" value="login"/>
                </form>
            </div>
        )
    }

    envia(event){
        event.preventDefault();
        const requestInfo = {
            method: 'POST',
            body: JSON.stringify({login:this.login.value, senha:this.senha.value}),
            headers: new Headers({
                "Content-type":'application/json'
            })
        }

        fetch('https://instalura-api.herokuapp.com/api/public/login', requestInfo)
            .then(response =>{
                if(response.ok){
                    return response.text();
                }else{
                    throw new Error("Erro no login ou senha.")
                }
            })
            .then(token => {
                localStorage.setItem('auth-token',token);
                this.props.history.push('timeline');
            })
            .catch(error =>
                this.setState({erro:error.message}))
    }
}