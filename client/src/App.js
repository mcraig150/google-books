
import React, { Component }  from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Search from './Pages/Search'
import Favorites from './Pages/Favorites'
class App extends Component {
  

  render() {
    return (
      <div className="App">
          <Router>
            <Switch>
              <Route exact path = '/'>
                <Search />
              </Route>
              <Route path = '/fav'>
                <Favorites />
              </Route>
            </Switch>  
          </Router>
      </div>
    );
  }
}

export default App;