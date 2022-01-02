import React from "react";

import { Main } from "../../styled-component/style";
import TopContent from "../../components/TopContent/TopContent";
import "./PetList.css";
import CardPetList from "../../components/CardPetList/CardPetList";

export default function PetList() {
    return (
        <Main>
            <TopContent screen="Pet List" count="232" />

            <div className="pet-list-content">
                <CardPetList />
                <CardPetList />
                <CardPetList />
                <CardPetList />
                <CardPetList />
                <CardPetList />
                <CardPetList />
                <CardPetList />
                <CardPetList />
                <CardPetList />
                <CardPetList />
                <CardPetList />
                <CardPetList />
                <CardPetList />
                <CardPetList />
                <CardPetList />
                <CardPetList />
                <CardPetList />
                <CardPetList />
                <CardPetList />
                <CardPetList />
                <CardPetList />
                <CardPetList />
                <CardPetList />
                <CardPetList />
                <CardPetList />
                <CardPetList />
                <CardPetList />
                <CardPetList />
                <CardPetList />
            </div>
        </Main>
    );
}
