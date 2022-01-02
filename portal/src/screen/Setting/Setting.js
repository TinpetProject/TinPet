import React from 'react';
import "./Setting.css";

export default function Setting({userID, hideSetting}) {
    return (
        <div className="container">
            <div className="container-layout" onClick={hideSetting}></div>
            <div className="container-content-box">
                hahaha
                <div></div>
            </div>
        </div>
    )
};
