import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import RouteView from "./router/index";

export default class main2 extends Component {
  render() {
    return (
      <div className="wrapper">
      
          <BrowserRouter>
         
           <RouteView/>
           
         </BrowserRouter>

      </div>
    )
  }
}
