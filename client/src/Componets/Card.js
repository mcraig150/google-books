import React, { Component } from "react";
import './Card.css'

export class Card extends Component {
  render() {
    return (
      <div>
        <div className="Book">
          <img className="Book__pic" src={this.props.book.image} />
          <div className="Book__text">
            <h2>{this.props.book.title}</h2>
            <p>test</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
