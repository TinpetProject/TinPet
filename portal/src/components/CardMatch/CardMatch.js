import React from "react";
import "./CardMatch.css";
import { Icon } from "@iconify/react";
import { useHistory } from "react-router-dom"

export default function CardMatch(props) {
    const history = useHistory();

    const redirectToProfile = () => {
        // history.push(`/profile/${props?.match?.userID}`);
        console.log(`May duoc redirect den trang profile cua user ${props?.match?.userID}`);
    }

    return (
        <div className="card-match" onClick={redirectToProfile}>
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
            <div className="card-match__btn card-match__btn--accept" onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                props.acceptMatches(props.userID, props?.match?.userID, "accept");
                props.updateMatchesList(props?.match?.userID);
            }}>
                <span>Accept</span>
            </div>

            <div className="card-match__btn card-match__btn--remove" onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                props.rejectMatches(props?.match?.userID, "reject");
            }}>
                <span>Remove</span>
            </div>

            <div className="card-match__bg-img" >
                <img
                    src={props?.match?.avatar}
                    alt=""
                />
            </div>
        </div>
    );
}
