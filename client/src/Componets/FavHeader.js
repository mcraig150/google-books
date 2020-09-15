import React, { Component } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export class FavHeader extends Component {
  render() {
    return (
      <div>
        <div className="Header">
          <h1 className="Header__icom">Book</h1>

          <div className="favHeader__center">
            <h1>Your Favorites</h1>
          </div>

          <div className="Header__right">
                <Link to = '/'><Button className='but' variant="outlined" onClick={this.handleClick}>HOME</Button></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default FavHeader;
