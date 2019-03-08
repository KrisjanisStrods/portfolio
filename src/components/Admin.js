import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"; 

import AdminHome from "./admin/AdminHome.js";
import Images from "./admin/Images.js";
import Upload from "./admin/Upload.js";
import Error from "./Error.js";

const Admin = () => {
    
    return(
        <BrowserRouter>
        <div>
          
          <Switch>
            <Route path="/admin" component={AdminHome} exact />
            <Route path="/admin/Images" component={Images} exact />
            <Route path="/admin/Upload" component={Upload} exact />
            <Route component={Error} />
          </Switch>
        </div>
        
      
      </BrowserRouter>
    );
};

export default Admin;