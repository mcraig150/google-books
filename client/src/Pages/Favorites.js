import React, { Component } from "react";
import FavHeader from "../Componets/FavHeader";
import Api from "../Util/Api";
import Card from "../Componets/Card";

export class Favorites extends Component {
  constructor() {
    super();

    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    this.getFavs();
  }

  getFavs() {
    Api.getBooks()
      .then((res) => {
        this.setState({ books: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    let books = this.state.books;
    return (
      <div>
        <FavHeader />
        <div className="Books">
          {books.map((book) => (
            <Card book={book} />
          ))}
        </div>
      </div>
    );
  }
}

export default Favorites;
