import React from "react";
import { useState, useEffect } from "react";
import "./InputSelection.css";

export default function InputSelection(props) {
    const renderOptions = () => {
        const data = props.list;

        const options = data.map((option, index) => {
            return (
                <option value={option.value} key={index}>
                    {option.label}
                    {option.country}
                    {option.br}
                    {typeof option !== "object" && option}
                </option>
            );
        });

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

    // console.log(props.list);

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
                <option disabled value="">
                    {props.placeholder}
                </option>
                {renderOptions()}
            </select>
        </div>
    );
}
