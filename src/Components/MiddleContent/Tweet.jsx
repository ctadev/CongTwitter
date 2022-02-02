import React from "react";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import "./tweet.scss";
import Avatar from "@mui/material/Avatar";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

function Tweet() {
  return (
    <div className="tweet-container">
      <div className="home-navbar">
        <h1>Home</h1>
        <StarBorderPurple500Icon />
      </div>
      <div className="tweet">
        <Avatar sx={{ bgcolor: "#1d9bf0", width: "3rem", height: "3rem" }}>
          N
        </Avatar>
        <input type="text" placeholder="What's happening?" />
      </div>
      <div className="icons-container">
        <div className="icon">
          <InsertPhotoOutlinedIcon />
          <GifBoxOutlinedIcon />
          <BallotOutlinedIcon />
          <SentimentSatisfiedOutlinedIcon />
          <DateRangeOutlinedIcon />
          <LocationOnOutlinedIcon />
        </div>
        <button>Tweet</button>
      </div>
    </div>
  );
}

export default Tweet;
