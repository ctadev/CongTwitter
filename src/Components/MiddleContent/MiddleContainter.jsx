import React from "react";
import "./middlecontainer.scss";
import Tweet from "./Tweet";
import Post from "./Post";

function MiddleContainter() {
  return (
    <div className="middle-container">
      <Tweet />
      <Post
        name="Elon Musk"
        user="@elonmusk"
        time="5h"
        message="Happy Lunar New Year from Tesla"
        image="https://pbs.twimg.com/media/FKaTy-IWUAENM9_?format=jpg&name=small"
        msgcount="16.7k"
        pollcount="18.3k"
        likecount="177.5k"
      />
      <Post
        name="Elon Musk"
        user="@elonmusk"
        time="15h"
        message="Starlinks with lasers deployed to orbit"
        image="https://pbs.twimg.com/media/FIdNmXtVkAEF0Ss?format=jpg&name=small"
        msgcount="21.2k"
        pollcount="11.8k"
        likecount="255.5k"
      />
    </div>
  );
}

export default MiddleContainter;
