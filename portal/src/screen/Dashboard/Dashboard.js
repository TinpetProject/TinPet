import React from "react";
import Card from "../../components/Card/Card";
import "./Dashboard.css";
import { Icon } from "@iconify/react";

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
                    <Card name="A Dog" age="2" location="Hanoi" url="" />
                    <Card name="A Dog" age="2" location="Hanoi" url="" />
                    <Card name="A Dog" age="2" location="Hanoi" url="" />
                    <Card name="A Dog" age="2" location="Hanoi" url="" />
                    <Card name="A Dog" age="2" location="Hanoi" url="" />
                    <Card name="A Dog" age="2" location="Hanoi" url="" />
                    <Card name="A Dog" age="2" location="Hanoi" url="" />
                    <Card name="A Dog" age="2" location="Hanoi" url="" />
                    <Card name="A Dog" age="2" location="Hanoi" url="" />
                    <Card name="A Dog" age="2" location="Hanoi" url="" />
                    <Card name="A Dog" age="2" location="Hanoi" url="" />
                    <Card name="A Dog" age="2" location="Hanoi" url="" />
                    <Card name="A Dog" age="2" location="Hanoi" url="" />
                    <Card name="A Dog" age="2" location="Hanoi" url="" />
                    <Card name="A Dog" age="2" location="Hanoi" url="" />
                    <Card name="A Dog" age="2" location="Hanoi" url="" />
                    <Card name="A Dog" age="2" location="Hanoi" url="" />
                    <Card name="A Dog" age="2" location="Hanoi" url="" />
                    <Card name="A Dog" age="2" location="Hanoi" url="" />
                    <Card name="A Dog" age="2" location="Hanoi" url="" />
                    <Card name="A Dog" age="2" location="Hanoi" url="" />
                    <Card name="A Dog" age="2" location="Hanoi" url="" />
                    <Card name="A Dog" age="2" location="Hanoi" url="" />
                </div>
            </div>
            <div className="best-match">
                <h1>Best Match</h1>
                <p>Handicapted for your pet</p>
                <div className="best-match__card">
                    <img src="assets/img/pic1.jpeg" alt="" />
                </div>
                <div className="best-match__info">
                    <p className="best-match__info--bold">Shibaaaa, 3</p>
                    <span className="best-match__info--bold">Location: </span>
                    <span>Hanoi</span>
                    <br />
                    <span className="best-match__info--bold">Breed: </span>
                    <span>Shiba</span>
                </div>
                <hr />
                <Icon className="best-match__plus-btn" icon="akar-icons:circle-plus" />
                <Icon className="best-match__message-btn" icon="iconoir:chat-bubble" />
                <Icon className="best-match__heart-btn" icon="bx:bxs-heart-circle" />
            </div>
        </div>
    );
}
