import React, { Component } from "react";
import Api from "../Util/Api";
import Card from "../Componets/Card";
import './Books.css'

export class Books extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
    };
  }

  componentDidUpdate(Props) {
    this.searchBook();
  }

  searchBook() {
    
    Api.getBook(this.props.search)
      .then((res) =>
        this.setState({
          books: res.data.items.map((book) => this.makeBook(book)),
        })
      )
      .catch((err) => console.error(err));
  }

  makeBook = (book) => {
     let img;
     if(book.volumeInfo.imageLinks === undefined) {
         img = 'https://via.placeholder.com/150'
     }
     else {
         img = book.volumeInfo.imageLinks.thumbnail
     }

    
    return {
      id: book.id,
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors,
      image: img
    };
  };


  render() {
    console.log(this.props.search)
    let books = this.state.books;
    return (
      <div className='Books'>
        {books.map((book) => (
          <Card book={book} />
        ))}
      </div>
    );
  }
}

export default Books;
