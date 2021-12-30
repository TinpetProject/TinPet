import React from "react";
import Card from "../../components/CardDashboard/CardDashboard";
import "./Dashboard.css";
import { Icon } from "@iconify/react";
import { Main } from "../../styled-component/style";
import TopContent from "../../components/TopContent/TopContent";

export default function Dashboard() {
    return (
        <>
            {" "}
            <Main>
                <div className="dashboard-wrapper">
                    <TopContent screen="Dashboard" count="2000" />

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
                        <p>Handicapped for your pet</p>
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
            </Main>
        </>
    );
}
