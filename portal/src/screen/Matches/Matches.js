import React, { useEffect } from "react";
import { Main } from "../../styled-component/style";
import "./Matches.css";
import CardMatch from "../../components/CardMatch/CardMatch";
import TopContent from "../../components/TopContent/TopContent";
import { getAllMatches, handleMatches } from "./api"
export default function Matches({ userID }) {
    const [matchList, setMatchList] = React.useState([]);

    useEffect(() => {
        userID && getAllMatches(userID).then(data => setMatchList(data));
    }, [userID])

    // console.log(userID);

    return (
        <Main>
            <TopContent screen="Matches" count={matchList.length ? matchList.length : 0} />
            <div className="matches-content">
                {matchList && matchList.length > 0 && matchList.map(match => {
                    return (
                        <CardMatch match={match} handleMatches={handleMatches} userId={userID}/>
                    )
                })}
            </div>
        </Main>
    );
}
