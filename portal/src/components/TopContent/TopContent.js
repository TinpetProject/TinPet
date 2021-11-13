import React from "react";
import "./TopContent.css";

export default function TopContent(props) {
    return (
        <div className="top">
            <div className="top__content">
                <span className="top__text">{props.screen}</span>
                <span className="top__count">{props.count}</span>
            </div>
        </div>
    );
}
