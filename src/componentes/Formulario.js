import React,{Component} from 'react';

export default class Formulario extends Component {

    //crear los refs
    tituloRef = React.createRef();
    entradaRef = React.createRef();

    crearPost = (e) => {
        e.preventDefault();
        
        //leer los refs
        const post = {
            title: this.tituloRef.current.value,
            body: this.entradaRef.current.value,
            userId: 1
        }

        //enviar por props o peticion por axios
        this.props.crearPost(post);
    }

    render() {
        return (
            <form onSubmit={this.crearPost} className="col-8">
                <legend className="text-center">Crear nuevo post</legend>
                <div className="form-group">
                    <label>Titulo del post:</label>
                    <input type="text" ref={this.tituloRef} className="form-control" placeholder="Titulo del post" />
                </div>
                <div className="form-group">
                    <label>Contenido:</label>
                    <textarea className="form-control" ref={this.entradaRef} placeholder="Contenido"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Crear</button>
            </form>
        );
    }
}