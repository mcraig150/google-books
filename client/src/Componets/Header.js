import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
    };
  }

  handlePress(event) {
    if (event.charCode === 13) {
      this.setState({ search: event.target.value }, () => {
        if (this.state.search === undefined) {
          this.props.callBack("");
        } else {
          this.props.callBack(this.state.search);
        }
      });
    }
  }

  render() {
    return (
      <div className="Header">
        <h1 className="Header__icom">Book</h1>

        <div className="Header__center">
          <input
            type="text"
            placeholder="Enter Name"
            onKeyPress={this.handlePress.bind(this)}
          />
          <div className="Header__search">
            <SearchIcon />
          </div>
        </div>

        <div className="Header__right">
          <Link to="/fav">
            <Button className='but' variant="outlined" onClick={this.handleClick}>
              FAVORITES
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
