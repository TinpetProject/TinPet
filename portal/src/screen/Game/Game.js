import React from "react";
import "./Game.css";
import { Main } from "../../styled-component/style";
import GameCanvas from "../../components/GameCanvas/GameCanvas";

export default function Game() {
    return (
        <>
            {" "}
            <Main>
                <div className="game-wrapper">

                    <div className="game-content">
                        <GameCanvas />
                    </div>

                    <div className="high-score">
                        High score here =))) Tuowngj chuwng thooi, game nay khong co 2score
                    </div>
                </div>
            </Main>
        </>
    );
}
