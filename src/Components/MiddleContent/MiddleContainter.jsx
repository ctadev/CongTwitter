import React, { useEffect, useState } from "react";
import "./middlecontainer.scss";
import Tweet from "./Tweet";
import Post from "./Post";
import { collection, orderBy, onSnapshot, query } from "firebase/firestore";
import { db } from "../../firebase";

function MiddleContainter() {
  const [post, setPosts] = useState([]);
  const database = db;

  useEffect(
    () =>
      onSnapshot(
        query(collection(database, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs.map((doc) => doc.data()));
        }
      ),
    [database]
  );

  return (
    <div className="middle-container">
      <Tweet />
      {post?.map((post) => (
        <Post
          key={post.timestamp}
          name="Cong Ta"
          user="@cta"
          time={`${post.timestamp?.toDate().toLocaleString()}`}
          message={post.text}
          image={post.image}
          msgcount={`${Math.floor(Math.random() * 100)}k`}
          pollcount={`${Math.floor(Math.random() * 100)}k`}
          likecount={`${Math.floor(Math.random() * 150)}k`}
          avatar="C"
        />
      ))}

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
