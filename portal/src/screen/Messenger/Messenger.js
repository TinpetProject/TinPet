import React, { useState, useEffect, useCallback } from "react";
import ChatWindow from "../../components/Chat/ChatWindow";
import ChatBar from "../../components/Chat/ChatBar";
import { useHistory, useParams } from "react-router";
import "./Messenger.css";
import { Main } from "../../styled-component/style";
const Messenger = React.memo(({ userID, socket }) => {
    const [conversationList, setConversationList] = useState([]);
    const token = localStorage.getItem("token");
    const chosenUserID = useParams().chosenUserID;
    const browserHistory = useHistory();

    useEffect(() => {
        const fetchList = async () => {
            const result = await fetch(`http://localhost:8888/chat`, {
                method: "GET",
                headers: { accept: "application/json", "Content-Type": "application/json", authorization: `Bearer ${token}` },
            });
            if (!result.ok) return;

            const listOfConversations = (await result.json()).data;
            if (listOfConversations.length !== 0) {
                const firstConversation = listOfConversations[0];

                if (browserHistory.location.pathname !== `/messenger/${firstConversation.userID}`) {
                    browserHistory.push(`/messenger/${firstConversation.userID}`);
                }
                setConversationList(listOfConversations);
            }
        };
        token && fetchList();
    }, []);

    const updateConversationList = useCallback((updatedData) => {
        setConversationList((prevList) => {
            let updatedConversation = null;
            const newConversationList = prevList.filter((conversation) => {
                if (conversation.userID === updatedData.userID) {
                    updatedConversation = {
                        ...conversation,
                        message: updatedData.content,
                        isSeen: !!updatedData.isSeen,
                        sender: updatedData.sender,
                    };
                }
                return conversation.userID !== updatedData.userID;
            });
            newConversationList.unshift(updatedConversation);
            return newConversationList;
        });
    }, []);

    // const openConversation = (targetUserID) => {
    //   setChosenUserID(targetUserID);
    // };

    const seenMessage = (messageID) => {
        if (messageID) {
            // console.log("seen seen");
            //   socket?.emit("seenNotification", {
            //     chosenUserID, userID});
            //   // socket?.emit("seenNotification", messageID);
        }
    };

    return (
        <Main>
            <div className="messenger">
                <ChatWindow
                    chosenUserID={chosenUserID}
                    socket={socket}
                    userID={userID}
                    newMessageReceivedHandler={updateConversationList}
                    onSeenMessage={seenMessage}
                />
                <ChatBar conversationList={conversationList} userID={userID} />
            </div>
        </Main>
    );
});

export default Messenger;
