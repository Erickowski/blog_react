import React,{Component} from 'react';
import Listado from './Listado';

export default class Posts extends Component {

    render() {
        return (
            <div className="col-12 col-m-8">
                <h2 className="text-center">Posts</h2>
                <Listado 
                    posts={this.props.posts}
                    borrarPost={this.props.borrarPost}
                />
            </div>
        );
    }
}