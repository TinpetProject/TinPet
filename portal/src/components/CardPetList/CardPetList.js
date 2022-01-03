import React from "react";
import { useState, useRef, useEffect } from "react";
import "./CardPetList.css";
import { Icon } from "@iconify/react";

export default function CardPetList(props) {
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
        <div className="card-pet-list">
            <img
                src={props?.pet?.avatar}
                alt=""
            />

            <div className="card-pet-list__info">
                <div className="card-pet-list__info--general">
                    <span>{props?.pet?.name}, {props?.pet?.age}</span>
                </div>
                <div className="card-pet-list__info--location">
                    <Icon className="location__location-icon" icon="ci:location" />
                    <span>{props?.pet?.address}</span>
                </div>
            </div>

            <Icon icon="iwwa:option-horizontal" color="#373737" className="card-pet-list__options" onClick={optionIconHandler} />

            <div
                className="card-pet-list__options-box"
                style={{
                    display: isOptionVisible ? "flex" : "none",
                }}
                ref={ref}
                onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    props.removePetList(props?.favorite?.userID)
                }}
            >
                <Icon icon="feather:x-square" color="#373737" />
                <span>Remove</span>
            </div>
        </div>
    );
}
