import React, { useEffect } from "react";
import { Main } from "../../styled-component/style";
import "./Matches.css";
import CardMatch from "../../components/CardMatch/CardMatch";
import TopContent from "../../components/TopContent/TopContent";
import { getAllMatches, handleMatches } from "./api"
import OptionDialog from "../../components/Dialog/OptionDialog"

export default function Matches({ userID }) {
    const [matchList, setMatchList] = React.useState([]);
    const [openDialog, setOpenDialog] = React.useState(false);
    const [requiredParams, setRequiredParam] = React.useState({})
    const handleOpenDialog = () => {
        setOpenDialog(true);
    }
    const handleCloseDialog = () => {
        setOpenDialog(false);
    }

    useEffect(() => {
        userID && getAllMatches(userID).then(data => setMatchList(data));
    }, [userID])

    console.log(matchList);

    const rejectMatches = (targetUserID, command) => {
        setOpenDialog(true);
        setRequiredParam({
            userID,
            targetUserID,
            command,
        })
    }

    return (
        <>
            <Main>
                <TopContent screen="Matches" count={matchList?.length ? matchList?.length : 0} />
                <div className="matches-content">
                    {matchList && matchList.length > 0 && matchList.map(match => {
                        return (
                            <CardMatch match={match} acceptMatches={handleMatches} rejectMatches={rejectMatches} userId={userID} key={match.userID}/>
                        )
                    })}
                </div>
            </Main>
            <OptionDialog handleClose={handleCloseDialog} handleOpen={handleOpenDialog} open={openDialog} option="Remove" msg="Are you really want remove this user ?" handleMatches={handleMatches} params={requiredParams}/>
        </>
    );
}
