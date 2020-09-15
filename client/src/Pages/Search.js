import React, { Component } from 'react'
import Header from '../Componets/Header.js'
import Books from '../Componets/Books'

export class Search extends Component {
    constructor() {
        super();
        this.state = {
            search: ''
        }
    }

    search = (data) => {
        
        this.setState({ search: data });
      };

    render() {
        return (
            <div>
                <Header  callBack={this.search}/>
                <Books search={this.state.search} />
            </div>
        )
    }
}

export default Search
