import axios from "axios";

export const getAllMatches = (userID) => {
    return axios.get(`/user/matches/${userID}`)
        .then(response => response.data)
        .catch(error => console.log(error));
}

export const handleMatches = (userId, targetUserId, command) => {
    return axios.post("/user/matches", { userId, targetUserId, command })
        .then(response => console.log(response))
        .catch(error => console.log(error));
}