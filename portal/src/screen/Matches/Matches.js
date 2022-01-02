import React from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import { Main } from "../../styled-component/style";
import "./Matches.css";
import CardMatch from "../../components/CardMatch/CardMatch";
import TopContent from "../../components/TopContent/TopContent";

export default function Matches() {
    return (
        <>
            <Main>
                <TopContent screen="Matches" count="232" />

                <div className="matches-content">
                    <CardMatch name="A Dog" age="2" location="Hanoi" url="" />
                    <CardMatch name="A Dog" age="2" location="Hanoi" url="" />
                    <CardMatch name="A Dog" age="2" location="Hanoi" url="" />
                    <CardMatch name="A Dog" age="2" location="Hanoi" url="" />
                    <CardMatch name="A Dog" age="2" location="Hanoi" url="" />
                    <CardMatch name="A Dog" age="2" location="Hanoi" url="" />
                    <CardMatch name="A Dog" age="2" location="Hanoi" url="" />
                    <CardMatch name="A Dog" age="2" location="Hanoi" url="" />
                    <CardMatch name="A Dog" age="2" location="Hanoi" url="" />
                </div>
            </Main>
        </>
    );
}
