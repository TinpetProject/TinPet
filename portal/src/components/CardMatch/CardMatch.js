import React from "react";
import "./CardMatch.css";
import { Icon } from "@iconify/react";

export default function CardMatch(props) {
    return (
        <div className="card-match">
            <div className="card-match__info">
                <div className="card-match__info--general">
                    <span>{props?.match?.name}, {props?.match?.age}</span>
                </div>
                <div className="card-match__info--location">
                    <Icon className="location__location-icon" icon="ci:location" />
                    <span>{props?.match?.address}</span>
                </div>
            </div>
c
            <div className="card-match__btn card-match__btn--accept" onClick={() => {
                props.acceptMatches(props.userID, props?.match?.userID, "accept");
                props.updateMatchesList(props?.match?.userID);
            }}>
                <span>Accept</span>
            </div>

            <div className="card-match__btn card-match__btn--remove" onClick={() => props.rejectMatches(props?.match?.userID, "reject")}>
                <span>Remove</span>
            </div>

            <div className="card-match__bg-img">
                <img
                    src={props?.match?.avatar}
                    alt=""
                />
            </div>
        </div>
    );
}
