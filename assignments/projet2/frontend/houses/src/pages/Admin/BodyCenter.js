import React from "react";
import LeftSideBar from "./BodyCenter/LeftSideBar";
import MainContent from "./BodyCenter/MainContent";

class BodyCenter extends React.Component {
  render() {
    return (
      <div className="app-main">
        {}
        <LeftSideBar/>
        {}
        {}
        <MainContent/>
      </div>
    );
  }
}

export default BodyCenter;
