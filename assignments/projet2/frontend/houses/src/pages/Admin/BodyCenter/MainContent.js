import React from "react";
import {  BrowserRouter as Router,Switch,Route,  useRouteMatch} from 'react-router-dom'

import MainContentListsRow from "../../../container/adminIssues.container";

import MainContentFooter from "./mainContent/dumb.components/MainContentFooter";
import Categories from "./mainContent/categories";

const MainContent =()=> {
    let match = useRouteMatch();
    console.log(match.path, ".../...",match)
    return (
      <div className="app-main__outer">
        <div className="app-main__inner">

            <Switch>
                <Route exact path={`${match.path}/`} component={MainContentListsRow} />
                <Route path={`${match.path}/list`} component={MainContentListsRow} />
                <Route  path={`${match.path}/add`} component={Categories} />

            </Switch>

        </div>
        <MainContentFooter/>{" "}
      </div>
    );

}

export default MainContent;
