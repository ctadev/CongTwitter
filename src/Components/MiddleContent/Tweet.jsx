import React, { useState, useRef } from "react";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import "./tweet.scss";
import Avatar from "@mui/material/Avatar";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import CloseIcon from "@mui/icons-material/Close";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import { db, storage } from "../../firebase";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

function Tweet() {
  const [tweet, setTweet] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [showEmojis, setShowEmojis] = useState(false);
  const [loading, setLoading] = useState(false);
  const fileRef = useRef(null);
  const textRef = useRef(null);
  const [textHeight, setTextHeight] = useState(null);

  const press = () => {
    setTextHeight(textRef.current.scrollHeight);
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  const sendPost = async () => {
    if (loading) return;
    setLoading(true);

    const docRef = await addDoc(collection(db, "posts"), {
      text: tweet,
      timestamp: serverTimestamp(),
    });

    const imageRef = ref(storage, `posts/${docRef.id}/image`);

    if (selectedFile) {
      await uploadString(imageRef, selectedFile, "data_url").then(async () => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", docRef.id), {
          image: downloadURL,
        });
      });
    }

    setLoading(false);
    setTweet("");
    setSelectedFile(null);
    setShowEmojis(false);
  };

  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setTweet(tweet + emoji);
  };

  return (
    <div className="tweet-container">
      <div className="home-navbar">
        <h1>Home</h1>
        <StarBorderPurple500Icon />
      </div>
      <div className="tweet">
        <Avatar sx={{ bgcolor: "#1d9bf0", width: "3rem", height: "3rem" }}>
          
        </Avatar>
        <textarea
          placeholder="What's happening?"
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
          ref={textRef}
          onKeyPress={() => press()}
          style={{ height: `${textHeight}px` }}
        />
      </div>
      {selectedFile && (
        <div className="image-container">
          <img alt="test" src={selectedFile} />
          <button onClick={() => setSelectedFile(null)}>
            <CloseIcon className="icon" />
          </button>
        </div>
      )}

      {!loading && (
        <div className="icons-container">
          <div className="icon">
            <div className="photo" onClick={() => fileRef.current.click()}>
              <InsertPhotoOutlinedIcon />
              <input
                type="file"
                hidden
                ref={fileRef}
                onChange={addImageToPost}
              />
            </div>
            <SentimentSatisfiedOutlinedIcon
              onClick={() => setShowEmojis(!showEmojis)}
            />
            <DateRangeOutlinedIcon />
          </div>
          <button onClick={sendPost} disabled={!tweet.trim()}>
            Tweet
          </button>
        </div>
      )}

      {showEmojis && (
        <Picker
          onSelect={addEmoji}
          style={{
            position: "absolute",
            marginTop: "20px",
            marginLeft: -10,
            maxWidth: "320px",
            borderRadius: "20px",
            zIndex: "2",
          }}
          theme="dark"
        />
      )}
    </div>
  );
}

export default Tweet;
