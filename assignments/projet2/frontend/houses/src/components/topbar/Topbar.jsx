import React from "react"
import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {useDispatch, useSelector} from "react-redux";


export default function Topbar() {
  const user = useSelector(state => state.user)
  console.log("---===>",user)
  
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Home</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar" style={{textAlign:"center"}}>
           <span>            View The Best Houses In Town</span>
          {/*<Search className="searchIcon" />*/}
          {/*<input*/}
          {/*  placeholder="Search for houses to find"*/}
          {/*  className="searchInput"*/}
          {/*/>*/}
        </div>
      </div>
      <div className="topbarRight">

        <Link to={`/profile/${""}`}>
          <img
            src={
               PF + "person/noAvatar.png"
            }
            alt=""
            className="topbarImg"
          />
        </Link>
      </div>
    </div>
  );
}
