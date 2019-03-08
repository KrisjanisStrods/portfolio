import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"; 

import Home from "./components/Home.js";
import Weddings from "./components/Weddings.js";
import Portraits from "./components/Portraits.js";
import Error from "./components/Error.js";

import Admin from "./components/Admin.js";

import './components/styles/navigation.css';



class App extends Component {

  render() {

    return (

      <BrowserRouter>
        <div>
          
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/weddings" component={Weddings} />
            <Route path="/portraits" component={Portraits} />
            <Route path="/admin" component={Admin} />
            <Route component={Error} />
          </Switch>
        </div>
        
      
      </BrowserRouter>

    );
  }
}

export default App;
