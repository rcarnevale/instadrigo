import React from 'react';
import FotoItem from './Foto';

export default class Timeline extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {fotos:[]};
        this.login = this.props.login;
    }
    
    carregaFoto(){
        let urlPerfil;
        
        if(this.login === undefined){
            urlPerfil = `https://instalura-api.herokuapp.com/api/fotos?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`
        }else{
            urlPerfil = `https://instalura-api.herokuapp.com/api/fotos/${this.login}`;
        }

        fetch(urlPerfil)
            .then(response => response.json())
            .then(fotos => {
                this.setState({fotos:fotos})
            })
    }

    componentDidMount(){
      this.carregaFoto();
    }
    
    componentWillReceiveProps(novasProps){
        if(novasProps.login !== undefined){
            this.login = novasProps.login;
            this.carregaFoto();
        }
    }
    render(){
        return(
            <div className="fotos container">
                
                {
                    this.state.fotos.map(foto => <FotoItem key={foto.id} imagem={foto}/>)
                }
                
                
            </div>
        );
    }
}