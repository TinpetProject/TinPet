import React, { useState, useEffect } from "react";
import Card from "../../components/CardDashboard/CardDashboard";
import "./Dashboard.css";
import { Icon } from "@iconify/react";
import { Main } from "../../styled-component/style";
import TopContent from "../../components/TopContent/TopContent";

export default function Dashboard() {
    const [cardList, setCardList] = useState([]);
    console.log("in dashboard:::");
    useEffect(() => {
        let token = localStorage.getItem("token");
        console.log(token);

        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        var requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
        };

        fetch("http://localhost:8888/pet/pet-suggestion", requestOptions)
            .then((response) => response.json())
            .then((result) => result.data.map((val, index, array) => array[array.length - 1 - index]))
            .then((result) => setCardList(result))
            .catch((error) => console.log("error", error));
    }, []);

    const renderCardList = () => {
        const res = cardList.map((el, index) => {
            let age;
            let currentYear = new Date().getFullYear();
            let yearBorn = el.petDOB;
            if (yearBorn) {
                yearBorn = yearBorn.substring(0, 4);
                age = currentYear - yearBorn;
            }

            if (el.avatar === "" || el.avatar === undefined) {
                el.avatar = "https://res.cloudinary.com/thecodingpanda/image/upload/v1641272668/zoyndaseei9wnbrybwxr.png";
            }

            if (el.avatar && el.avatar.substring(0, 6) === "server") {
                el.avatar = "https://res.cloudinary.com/thecodingpanda/image/upload/v1641272668/zoyndaseei9wnbrybwxr.png";
            }

            if (el.name === "Default") {
                return "";
            }

            return (
                <Card
                    name={el.name}
                    age={age}
                    location="Hanoi"
                    pictureUrl={el.avatar}
                    key={index}
                    petID={el.petID}
                    userID={el.userID}
                    matchPercentage={Math.floor(Math.random() * 100) + 1}
                />
            );
        });
        return res;
    };

    return (
        <>
            {" "}
            <Main>
                <div className="dashboard-wrapper">
                    <TopContent screen="Dashboard" count={cardList.length} />

                    <div className="dashboard-content">
                        <div className="card-list">{renderCardList()}</div>
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
