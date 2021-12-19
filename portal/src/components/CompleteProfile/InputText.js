import React from "react";
import "./InputText.css";
import { useState } from "react";

export default function InputText(props) {
    const [text, setText] = useState("");

    const inputHandler = (e) => {
        setText(e.target.value);
    };

    return (
        <div className="complete-profile__input-text">
            <label for="">{props.label}</label>
            <input
                type="text"
                onChange={inputHandler}
                name=""
                value={text}
                className="complete-profile__input-text-field"
                placeholder={props.placeholder}
            />
        </div>
    );
}
