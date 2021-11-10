import React from "react";
import Card from "../../components/Card/Card";
import "./Dashboard.css";

export default function Dashboard() {
    return (
        <div className="dashboard-wrapper">
            <div className="dashboard-top">
                <div className=" dashboard-top__content">
                    <span className="dashboard-top__text">Dashboard</span>
                    <span className="dashboard-top__count">2000</span>
                </div>
            </div>
            <div className="dashboard-content">
                <div className="card-list">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="best-match"></div>
            </div>
        </div>
    );
}
