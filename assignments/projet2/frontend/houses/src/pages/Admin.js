import React from "react";
import HeaderTopBar from "./Admin/HeaderTopBar";

import BodyCenter from "./Admin/BodyCenter";

import '../assets/main.css'
class Admin extends React.Component {
  render() {
    return (
      <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
        {}
        <HeaderTopBar/>

        <BodyCenter/>
      </div>
    );
  }
}

export default Admin;
