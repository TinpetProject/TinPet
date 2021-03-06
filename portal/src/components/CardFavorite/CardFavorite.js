import React from "react";
import { useState, useRef, useEffect } from "react";
import "./CardFavorite.css";
import { Icon } from "@iconify/react";

export default function CardFavorite(props) {
    const ref = useRef();

    const [isOptionVisible, setIsOptionVisible] = useState(false);

    const optionIconHandler = () => {
        setIsOptionVisible(true);
    };

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (isOptionVisible && ref.current && !ref.current.contains(e.target)) {
                setIsOptionVisible(false);
            }
        };

        document.addEventListener("mousedown", checkIfClickedOutside);

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [isOptionVisible]);

    return (
        <div className="card-favorite">
            <img src={props?.favorite?.avatar} alt="" />

            <div className="card-favorite__info">
                <div className="card-favorite__info--general">
                    <span>
                        {props?.favorite?.name}, {props?.favorite?.age}
                    </span>
                </div>
                <div className="card-favorite__info--location">
                    <Icon className="location__location-icon" icon="ci:location" />
                    <span>{props?.favorite?.address}</span>
                </div>
            </div>

            <Icon icon="iwwa:option-horizontal" color="#373737" className="card-favorite__options" onClick={optionIconHandler} />

            <div
                className="card-favorite__options-box"
                style={{
                    display: isOptionVisible ? "flex" : "none",
                }}
                ref={ref}
            >
                <div
                    className="card-favorite__options-item"
                    onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        console.log("Matched");
                        props.acceptFavorite();
                    }}
                >
                    <Icon icon="bx:bx-heart-circle" color="#373737" />
                    <span>Match</span>
                </div>
                <div
                    className="card-favorite__options-item"
                    onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        props.removeFavorite(props?.favorite?.userID);
                    }}
                >
                    <Icon icon="feather:x-square" color="#373737" />
                    <span>Remove</span>
                </div>
            </div>
        </div>
    );
}
