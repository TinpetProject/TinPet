import React, { useEffect } from "react";

import { Main } from "../../styled-component/style";
import TopContent from "../../components/TopContent/TopContent";
import "./Favorite.css";
import CardFavorite from "../../components/CardFavorite/CardFavorite";
import { getAllFavorites, removeFavorite } from "./api";
import OptionDialog from "../../components/Dialog/OptionDialog"

export default function PetList({ userID }) {
    const [favoriteList, setFavoriteList] = React.useState([]);
    const [openDialog, setOpenDialog] = React.useState(false);
    const [requiredParams, setRequiredParam] = React.useState({})
    const handleOpenDialog = () => {
        setOpenDialog(true);
    }
    const handleCloseDialog = () => {
        setOpenDialog(false);
    }

    useEffect(() => {
        userID && getAllFavorites(userID).then(data => setFavoriteList(data));
    }, [userID])

    console.log(favoriteList);

    const rejectFavorites = (targetUserID) => {
        setOpenDialog(true);
        setRequiredParam({
            userID,
            targetUserID,
        });
    }
    const updateFavoriteList = (targetUserID) => {
        setFavoriteList(favoriteList.filter(favorite => favorite.userID !== targetUserID))
    }
    return (
        <>
            <Main>
                <TopContent screen="Favorite" count={favoriteList?.length || 0} />

                <div className="favorite-content">
                    {
                        favoriteList && favoriteList.length > 0 && favoriteList.map(favorite => {
                            return (
                                <CardFavorite favorite={favorite} acceptFavorite={""} removeFavorite={rejectFavorites} userID={userID} key={favorite.userID} updateFavoriteList={updateFavoriteList} />
                            )
                        })
                    }
                </div>
            </Main>
            <OptionDialog handleClose={handleCloseDialog} handleOpen={handleOpenDialog} open={openDialog} option="Remove" msg="Are you really want remove this user ?" handleFavorites={removeFavorite} params={requiredParams} updateList={updateFavoriteList} />
        </>
    );
}
