import React from "react";
import "./CardMatch.css";
import { Icon } from "@iconify/react";

export default function CardMatch(props) {
    return (
        <div className="card-match">
            <div className="card-match__info">
                <div className="card-match__info--general">
                    <span>{props.name}, 2</span>
                </div>
                <div className="card-match__info--location">
                    <Icon className="location__location-icon" icon="ci:location" />
                    <span>Hanoi</span>
                </div>
            </div>
c
            <div className="card-match__btn card-match__btn--accept">
                <span>Accept</span>
            </div>

            <div className="card-match__btn card-match__btn--remove">
                <span>Remove</span>
            </div>

            <div className="card-match__bg-img">
                <img
                    src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/08/gettyimages-464163411.jpg?crop=1.0xw:1xh;center,top&resize=980:*"
                    alt=""
                />
            </div>
        </div>
    );
}
