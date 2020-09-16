import React, { Component } from "react";
import "./Card.css";
import TextTruncate from "react-text-truncate";
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Api from '../Util/Api'
export class FavCard extends Component {

  constructor() {
    super();
    this.state = {
      clicked: false 
    }
  }

  handleClick() {
    let book = this.props.book._id;

    Api.removeBook(book)
 
    console.log(book)
  }

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

            <IconButton className='fav' onClick = {this.handleClick.bind(this)}>
              <DeleteIcon />
            </IconButton>
            
          </div>
        </div>
      </div>
    );
  }
}

export default FavCard;
