import React from 'react';
import {Link} from 'react-router-dom';

export default class FotoItem extends React.Component{
    render(){
        return(
            <div className="foto">
                
                <FotoHeader  imagem={this.props.imagem} />

                <img alt="foto" className="foto-src" src={this.props.imagem.urlFoto}/>

                <FotoInfo imagem={this.props.imagem}/>

                <FotoAtualizacoes />

                </div> /*fim .foto*/
        )
    }
}

class FotoHeader extends React.Component {
    render(){
        return(
            <header className="foto-header">
                <figure className="foto-usuario">
                <img src={this.props.imagem.urlPerfil} alt="foto do usuario"/>
                <figcaption className="foto-usuario">
                    <Link to={`/timeline/${this.props.imagem.loginUsuario}`}>
                    {this.props.imagem.loginUsuario}
                    </Link>  
                </figcaption>
                </figure>
                <time className="foto-data">{this.props.imagem.horario}</time>
            </header>
        )
    }
}

class FotoInfo extends React.Component {
    render(){
        return(
            <div className="foto-info">
                    <div className="foto-info-likes">
                        {
                            this.props.imagem.likers.map(liker => {
                                return(
                                    <Link to={`/timeline/${liker.login}`}>
                                    {liker.login},
                                </Link>
                                )
                            })
                        }
                  
                    curtiram
                
                    </div>

                    <p className="foto-info-legenda">
                    <a className="foto-info-autor">autor </a>
                        {this.props.imagem.comentario}
                    </p>

                    <ul className="foto-info-comentarios">
                    {
                        this.props.imagem.comentarios.map(comentario => {
                            return (
                                <li className="comentario">
                                    <Link to={`timeline/${comentario.login}`}className="foto-info-autor">{comentario.login} </Link>
                                    {comentario.texto}
                                </li>
                            )
                        })
                    }
                    
                    </ul>
                </div>
        )
    }
}

class FotoAtualizacoes extends React.Component {
    render(){
        return(
            <section className="fotoAtualizacoes">
                    <a href="#" className="fotoAtualizacoes-like">Likar</a>
                    <form className="fotoAtualizacoes-form">
                    <input type="text" placeholder="Adicione um comentário..." className="fotoAtualizacoes-form-campo"/>
                    <input type="submit" value="Comentar!" className="fotoAtualizacoes-form-submit"/>
                    </form>

                </section>

        )
    }
}