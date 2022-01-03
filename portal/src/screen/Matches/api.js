import axios from "axios";
import { toast } from "react-toastify";

export const getAllMatches = (userID) => {
    return axios.get(`/user/matches/${userID}`)
        .then(response => response.data.data)
        .catch(error => console.log(error));
}

export const handleMatches = ({ userID, targetUserID, command }) => {
    return axios.post("/user/matches", { userID, targetUserID, command })
        .then((response) => {
            if (response.status === 200) {
                if (command === "accept") {
                    toast.success(`Accept user ${targetUserID} successfully!`, {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                } else {
                    toast.success(`Remove user ${targetUserID} successfully!`, {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                }
            }
        })
        .catch((err) => {
            switch (err.response.status) {
                case 400:
                case 404:
                    toast.error("Invalid user", {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                    break;
                case 500:
                    toast.error("Internal Server Error!", {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                    break;
                default:
                    break;
            }
        })
}