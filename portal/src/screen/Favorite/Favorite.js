import React from "react";

import { Main } from "../../styled-component/style";
import TopContent from "../../components/TopContent/TopContent";
import "./Favorite.css";
import CardFavorite from "../../components/CardFavorite/CardFavorite";

export default function PetList() {
    return (
        <Main>
            <TopContent screen="Favorite" count="232" />

            <div className="favorite-content">
                <CardFavorite />
            </div>
        </Main>
    );
}
