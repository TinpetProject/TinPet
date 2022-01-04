import React, { useEffect } from "react";

import { Main } from "../../styled-component/style";
import TopContent from "../../components/TopContent/TopContent";
import "./PetList.css";
import CardPetList from "../../components/CardPetList/CardPetList";
import { getPetList, removeFromPetList } from "./api";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import zIndex from "@mui/material/styles/zIndex";

export default function PetList({ userID }) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
    const [petList, setPetList] = React.useState([]);
    const [openDialog, setOpenDialog] = React.useState(false);
    const [requiredParams, setRequiredParam] = React.useState({});
    const handleOpenDialog = () => {
        setOpenDialog(true);
    };
    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    useEffect(() => {
        userID &&
            getPetList(userID).then((data) => {
                console.log(data);
                setPetList(data.data);
            });
    }, [userID]);

    const removePetList = (targetUserID) => {
        handleOpenDialog();
        setRequiredParam({
            userID,
            targetUserID,
        });
    };
    const updatePetList = (targetUserID) => {
        setPetList(petList.filter((match) => match.userID !== targetUserID));
    };

    return (
        <>
            <Main>
                <TopContent screen="Pet List" count={petList?.length || 0} />
                <div className="pet-list-content">
                    {petList &&
                        petList.length > 0 &&
                        petList.map((pet, index) => {
                            return (
                                <CardPetList
                                    pet={pet}
                                    removePetList={removePetList}
                                    userID={userID}
                                    key={index}
                                    updatePetList={updatePetList}
                                />
                            );
                        })}
                </div>
            </Main>
            <Dialog fullScreen={fullScreen} open={openDialog} onClose={handleCloseDialog} aria-labelledby="responsive-dialog-title">
                <DialogTitle id="responsive-dialog-title">Confirm</DialogTitle>
                <DialogContent>
                    <DialogContentText>Are you really want to remove this user from your list?</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleCloseDialog}>
                        Cancel
                    </Button>
                    <Button
                        onClick={() => {
                            removeFromPetList(requiredParams);
                            updatePetList(requiredParams.userID);
                            handleCloseDialog();
                        }}
                    >
                        Remove
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
