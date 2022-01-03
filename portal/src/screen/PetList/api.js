import axios from "axios"
import { toast } from "react-toastify"

export const getPetList = (userID) => {
    return axios.get(`/user/friend/${userID}`)
        .then(response => response.data.data)
        .catch(error => console.log(error));
}

export const removeFromPetList = ({ userID, targetUserID }) => {
    return axios.post("/user/friend", { userID, targetUserID })
        .then((response) => {
            if (response.status === 200) {
                toast.success(`Remove user ${userID} successfully!`, {
                    position: toast.POSITION.TOP_RIGHT,
                });
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
        });
}