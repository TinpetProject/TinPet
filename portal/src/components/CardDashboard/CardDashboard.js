import React from "react";
import { useState } from "react";
import "./Card.css";
import { Icon } from "@iconify/react";
import { useHistory } from "react-router-dom";

export default function Card(props) {
  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const [isPlusClicked, setIsPlusClicked] = useState(false);
  const history = useHistory();

    const cardOnClickHandler = () => {
        history.push(`/profile/${props?.userID}`);
    };

    const heartBtnOnClickHandler = () => {
        let token = localStorage.getItem("token");
        setIsHeartClicked(!isHeartClicked);
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            targetUserID: props.userID,
        });

        var requestOptions = {
            method: "PUT",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };

        fetch("http://localhost:8888/pet/like", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error));
    };

    const plusBtnOnClickHandler = () => {
        setIsPlusClicked(!isPlusClicked);
        if (!isHeartClicked && isPlusClicked == false) {
            setIsHeartClicked(true);
        }
        let token = localStorage.getItem("token");
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            targetUserID: props.userID,
        });

        var requestOptions = {
            method: "PUT",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };

        fetch("http://localhost:8888/pet/follow", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error));
    };

  return (
    <div className="card">
      <div className="card__match">
        <span>{props.matchPercentage}% Match</span>
      </div>

      <div className="card__info">
        <div className="info__general">
          <span>
            {props.name}, {props.age}
          </span>
          {/* <Icon className="general__status-icon" icon="bi:circle-fill" /> */}
        </div>
        <div className="info__location">
          <Icon className="location__location-icon" icon="ci:location" />
          <span>Hanoi</span>
        </div>
        <div className="info__name"></div>
        <Icon
          className={`info__heart-btn ${isHeartClicked && "clicked"}  `}
          icon="bx:bxs-heart-circle"
          onClick={heartBtnOnClickHandler}
        />
        <Icon
          className={`info__plus-btn ${isPlusClicked && "clicked"}`}
          icon="bi:plus-circle-fill"
          onClick={plusBtnOnClickHandler}
        />
      </div>

      <div className="card__bg-img" onClick={cardOnClickHandler}>
        <img src={props.pictureUrl} alt="" />
      </div>
    </div>
  );
}
