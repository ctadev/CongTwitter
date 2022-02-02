import React from "react";
import "./rightcontainer.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Avatar from "@mui/material/Avatar";

function RightContainer() {
  return (
    <div className="right-container">
      <div className="fixed-container">
        <div className="search_bar">
          <SearchOutlinedIcon className="search-icon" />
          <input type="text" placeholder="Search Twitter" />
        </div>
        <div className="news-container">
          <h3>What's happening</h3>
          <div className="item1">
            <p>Music Live</p>
            <h4>Happy birthday, Harry Styles</h4>
            <p>
              Trending with <span>#HarryStyle</span>
            </p>
          </div>
          <div className="item1">
            <p>NFL Trending</p>
            <h4>New England</h4>
            <p>200k Tweets</p>
          </div>
          <div className="item1">
            <p>Trending in Canada</p>
            <h4>#Omicronvoy</h4>
            <p>2,225 Tweets</p>
          </div>
        </div>

        <div className="follow-container">
          <h3>Who to follow</h3>
          <div className="suggestion">
            <div className="user">
              <Avatar
                alt="Remy Sharp"
                src="https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ_400x400.jpg"
              />
              <div className="name">
                <h4>SpaceX</h4>
                <p>@SpaceX</p>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="suggestion">
            <div className="user">
              <Avatar
                alt="Remy Sharp"
                src="https://pbs.twimg.com/profile_images/1337607516008501250/6Ggc4S5n_400x400.png"
              />
              <div className="name">
                <h4>Tesla</h4>
                <p>@Tesla</p>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="suggestion">
            <div className="user">
              <Avatar
                alt="Remy Sharp"
                src="https://pbs.twimg.com/profile_images/421692600446619648/dWAbC2wg_400x400.jpeg"
              />
              <div className="name">
                <h4>Cryptocurrency</h4>
                <p>@Crypto</p>
              </div>
            </div>
            <button>Follow</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightContainer;
