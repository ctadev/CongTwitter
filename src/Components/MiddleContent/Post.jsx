import React from "react";
import Avatar from "@mui/material/Avatar";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ScreenShareOutlinedIcon from "@mui/icons-material/ScreenShareOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import "./post.scss";

function Post({
  name,
  username,
  time,
  message,
  image,
  msgcount,
  pollcount,
  likecount,
}) {
  return (
    <div className="post-container">
      <div className="title">
        <Avatar sx={{ bgcolor: "#1d9bf0", width: "3rem", height: "3rem" }}>
          E
        </Avatar>
        <div className="tweet-info">
          <div className="user-info">
            <h3>{name}</h3>
            <VerifiedIcon className="verification" />
            <p>{username}</p>
            <p>  {time}</p>
          </div>
          <p className="tweet-message">{message}</p>
          <img src={image} alt="tweet"/>
          <div className="icons">
            <div className="icons-item">
              <ChatBubbleOutlineIcon />
              <p>{msgcount}</p>
            </div>
            <div className="icons-item">
              <ScreenShareOutlinedIcon />
              <p>{pollcount}</p>
            </div>
            <div className="icons-item">
              <FavoriteBorderOutlinedIcon />
              <p>{likecount}</p>
            </div>
            <div className="icons-item">
              <IosShareOutlinedIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
