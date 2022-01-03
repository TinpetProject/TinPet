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
                    <span>{props?.match?.location}</span>
                </div>
            </div>
c
            <div className="card-match__btn card-match__btn--accept" onClick={() => props.handleMatches(props.userId, props?.match?.id, "accept")}>
                <span>Accept</span>
            </div>

            <div className="card-match__btn card-match__btn--remove" onClick={() => props.handleMatches(props.userId, props?.match?.id, "reject")}>
                <span>Remove</span>
            </div>

            <div className="card-match__bg-img">
                <img
                    src={props?.match?.AVA}
                    alt=""
                />
            </div>
        </div>
    );
}
