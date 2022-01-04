import React from "react";
import "./InputText.css";

export default function InputText(props) {
    const inputHandler = (e) => {
        props.setValue(e.target.value);
    };

    return (
        <div className="complete-profile__input-text">
            <label>{props.label}</label>
            <input
                type="text"
                onChange={inputHandler}
                name=""
                value={props.value}
                className="complete-profile__input-text-field"
                placeholder={props.placeholder}
            />
        </div>
    );
}
