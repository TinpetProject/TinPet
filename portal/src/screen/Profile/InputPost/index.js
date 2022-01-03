import React from 'react'
import {
    InputPostWrapper, 
    InputPostContent, 
    InputFieldText,
    InputPostAdd,
    InputAdd,
    IconInput,
    ButtonInput,
    InputPostButton,
    Avatar
} from './style'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
//data
import { Users } from "../dummyData";
import CreatePost from "./CreatePost/CreatePost"



export default function InputPost() {
    const [isOpen, setIsOpen] = React.useState(false);
    const openPostDetail = () => {
        setIsOpen(true);
    }
    const closePostDetail = () => {
        setIsOpen(false);
    }

    const addmore = [
        {
            icon: <PermMediaIcon/>,
            button: "Pictures/Videos",
            handler: openPostDetail
        },
        {
            icon: <LoyaltyIcon/>,
            button: "Tag",
            handler: openPostDetail
        },
    ];

    return (
        <div>  
            <InputPostWrapper>
                <InputPostContent>
                    {Users.map((u) => (
                        <Avatar src={u.profilePicture} key={u.userid}/>
                    ))}
                    <InputFieldText onClick={openPostDetail}>What do you think?</InputFieldText>
                </InputPostContent>
                
                <InputPostAdd>
                    {addmore?.map((btn) =>(
                        <InputAdd key={btn.button} onClick={btn.handler}>
                            <IconInput>{btn.icon}</IconInput>
                            <ButtonInput>{btn.button}</ButtonInput>
                        </InputAdd>
                    ))}
                </InputPostAdd>
                <InputPostButton onClick={openPostDetail}>Post</InputPostButton>
            </InputPostWrapper>
            {isOpen ? <CreatePost closePostDetail={closePostDetail} /> : ""}
        </div>
    )
    
}
