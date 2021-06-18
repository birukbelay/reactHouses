import React from "react"
import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "./online/Online";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Add, Remove } from "@material-ui/icons";
import {API_ROOT} from "../../store/constants";

export default function Rightbar({ house }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [owner, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(house?.id)
  );

  useEffect(() => {
    const getFriends = async () => {
      try {
        const owner = await axios.get(API_ROOT+"user/" + house.owner_id);
        console.log("ownerData===>", owner.data)
        setFriends(owner.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [house]);

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(`/users/${house._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: house._id });
      } else {
        await axios.put(`/users/${house._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: house._id });
      }
      setFollowed(!followed);
    } catch (err) {
    }
  };

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer" >
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };


  //===================================== The Users Profile Bar
  const ProfileRightbar = () => {
    return (
      <>
        {/*{house.username !== currentUser.username && (*/}
        {/*  // <button className="rightbarFollowButton" onClick={handleClick}>*/}
        {/*  //   {followed ? "Unfollow" : "Follow"}*/}
        {/*  //   {followed ? <Remove /> : <Add />}*/}
        {/*  // </button>*/}
        {/*)}*/}
        <h4 className="rightbarTitle">House details</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Area:</span>
            <span className="rightbarInfoValue">{house.area_name}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">price:</span>
            <span className="rightbarInfoValue">{house.price}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">posted on:</span>
            <span className="rightbarInfoValue">
              {house.posted_date}
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">Owner Details</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Email:</span>
            <span className="rightbarInfoValue">{owner.email}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">phone no:</span>
            <span className="rightbarInfoValue">
              0911234567
              {/*{house.posted_date}*/}
            </span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">User joined on:</span>
            <span className="rightbarInfoValue">{owner.registered_on}</span>
          </div>

        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {house ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
