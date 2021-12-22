import React from "react";
import { useState, useEffect } from "react";
import "./InputSelection.css";

export default function InputSelection(props) {
    const renderOptions = () => {
        const data = props.list;

        const options = data.map((option) => (
            <option value={option.value}>
                {option.label}
                {option.country}
                {typeof option !== "object" && option}
            </option>
        ));

        return <>{options}</>;
    };

    const shouldDisable = () => {
        if (props.label == "") {
            return props.condition ? false : true;
        }
        return false;
    };

    const selectHandler = (e) => {
        props.setValue(e.target.value);
    };

    return (
        <div className="complete-profile__input-selection">
            <label>{props.label}</label>
            <select
                className="complete-profile__input-selection-field"
                required
                value={props.value}
                onChange={selectHandler}
                disabled={shouldDisable()}
            >
                <option selected disabled value="">
                    {props.placeholder}
                </option>
                {renderOptions()}
            </select>
        </div>
    );
}
