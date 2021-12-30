import React from "react";
import "./InputDate.css";

export default function InputDate(props) {
    const inputDateHandler = (e) => {
        // alert(e.target.value);
        props.setValue(e.target.value);
    };

    return (
        <div className="complete-profile__input-date">
            <label>{props.label}</label>
            <input type="date" placeholder="dd/mm/yyyy" onChange={inputDateHandler} value={props.value} />
        </div>
    );
}
