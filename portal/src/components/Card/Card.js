import React from "react";
import "./Card.css";
import { Icon } from "@iconify/react";

export default function Card(props) {
    return (
        <div className="card">
            <div className="card__match">
                <span>80% Match</span>
            </div>

            <div className="card__info">
                <div className="info__general">
                    <span>{props.name}, 2</span>
                    <Icon className="general__status-icon" icon="bi:circle-fill" />
                </div>
                <div className="info__location">
                    <Icon className="location__location-icon" icon="ci:location" />
                    <span>Hanoi</span>
                </div>
                <div className="info__name"></div>
                <Icon className="info__heart-btn" icon="bx:bxs-heart-circle" />
                <Icon className="info__plus-btn" icon="bi:plus-circle-fill" />
            </div>

            <div className="card__bg-img">
                <img
                    src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/08/gettyimages-464163411.jpg?crop=1.0xw:1xh;center,top&resize=980:*"
                    alt=""
                />
            </div>
        </div>
    );
}
