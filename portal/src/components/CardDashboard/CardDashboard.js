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
        setIsHeartClicked(!isHeartClicked);
    };

    const plusBtnOnClickHandler = () => {
        setIsPlusClicked(!isPlusClicked);
        if (!isHeartClicked && isPlusClicked == false) {
            setIsHeartClicked(true);
        }
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
