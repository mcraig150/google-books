import React, { Component } from "react";
import "./Card.css";
import TextTruncate from "react-text-truncate";
export class Card extends Component {
  render() {
    let author = " ";
    if (this.props.book.author !== undefined) {
      author = this.props.book.author;
    }
    console.log(author);
    return (
      <div>
        <div className="Book">
          <img className="Book__pic" src={this.props.book.image} />
          <div className="Book__text">
            <TextTruncate
              textLength='15'
              element="h3"
              truncateText=".."
              text={this.props.book.title}
            />

            <TextTruncate
              textLength='15'
              element="p"
              truncateText=".."
              text={`${author}`}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
