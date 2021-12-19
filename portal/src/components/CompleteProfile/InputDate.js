import React from "react";
import "./InputDate.css";

export default function InputDate(props) {
    return (
        <div className="complete-profile__input-date">
            <label for="">{props.label}</label>
            <input type="date" placeholder="dd/mm/yyyy" />
        </div>
    );
}
