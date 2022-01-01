import React from "react";
import { useState, useRef, useEffect } from "react";
import "./CardFavorite.css";
import { Icon } from "@iconify/react";

export default function CardFavorite() {
    const ref = useRef();

    const [isOptionVisible, setIsOptionVisible] = useState(false);

    const optionIconHandler = () => {
        setIsOptionVisible(true);
    };

    const close = () => {
        setIsOptionVisible(false);
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
            <img
                src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/08/gettyimages-464163411.jpg?crop=1.0xw:1xh;center,top&resize=980:*"
                alt=""
            />

            <div className="card-favorite__info">
                <div className="card-favorite__info--general">
                    <span>Name, 2</span>
                </div>
                <div className="card-favorite__info--location">
                    <Icon className="location__location-icon" icon="ci:location" />
                    <span>Hanoi</span>
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
                <div className="card-favorite__options-item">
                    <Icon icon="bx:bx-heart-circle" color="#373737" />
                    <span>Match</span>
                </div>
                <div className="card-favorite__options-item">
                    <Icon icon="feather:x-square" color="#373737" />
                    <span>Remove</span>
                </div>
            </div>
        </div>
    );
}
