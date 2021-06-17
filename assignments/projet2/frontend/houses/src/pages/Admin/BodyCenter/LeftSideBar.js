import React from "react";
import {useDispatch} from "react-redux";
import {getPendingIssues} from '../../../store/issues/issues.actions'
import * as types from '../../../store/issues/issues.types'
import {Link, useRouteMatch} from "react-router-dom";


const LeftSideBarInner =()=>{
  let match = useRouteMatch();
  const dispatch = useDispatch();
  return (
      <div className="scrollbar-sidebar">
        <div className="app-sidebar__inner">
          <ul className="vertical-nav-menu">
            <li className="app-sidebar__heading">List</li>
            <li>
              <Link to={`${match.path}/`}  className="mm-active">
                <i className="metismenu-icon pe-7s-info" />
                Your Listings
              </Link>
            </li>


            <li className="app-sidebar__heading">Add Houses</li>
            <li>
              <Link to={`${match.path}/add`} >
                <i className="metismenu-icon pe-7s-wallet" />
                Create House
              </Link>
            </li>
            <li>

            </li>

          </ul>
        </div>
      </div>
  );

}


class LeftSideBar extends React.Component {
  render() {
    return (
      <div className="app-sidebar sidebar-shadow">
        <div className="app-header__logo">
          <div className="logo-src" />
          <div className="header__pane ml-auto">
            <div>
              <button
                type="button"
                className="hamburger close-sidebar-btn hamburger--elastic"
                data-class="closed-sidebar"
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="app-header__mobile-menu">
          <div>
            <button
              type="button"
              className="hamburger hamburger--elastic mobile-toggle-nav"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
          </div>
        </div>
        <div className="app-header__menu">
          <span>
            <button
              type="button"
              className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
            >
              <span className="btn-icon-wrapper">
                <i className="fa fa-ellipsis-v fa-w-6" />
              </span>
            </button>
          </span>
        </div>
        <LeftSideBarInner/>
      </div>
    );
  }
}

export default LeftSideBar;
