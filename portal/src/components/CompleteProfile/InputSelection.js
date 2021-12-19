import React from "react";
import { useState } from "react";
import "./InputSelection.css";
import Select from "react-select";

export default function InputSelection(props) {
    const options = [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" },
    ];

    return (
        <div className="complete-profile__input-selection">
            <label for="">{props.label}</label>
            <select className="complete-profile__input-selection-field" required>
                <option value="" selected disabled hidden>
                    {props.placeholder}
                </option>
                <option value="">1</option>
                <option value="">1</option>
                <option value="">1</option>
                <option value="">1</option>
                <option value="">1</option>
            </select>
        </div>
    );
}
