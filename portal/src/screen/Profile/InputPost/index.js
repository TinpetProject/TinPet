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

const addmore = [
    {
        icon: <PermMediaIcon/>,
        button: "Pictures/Videos",
    },
    {
        icon: <LoyaltyIcon/>,
        button: "Tag",
    },
];

export default function InputPost() {
    const [isOpen, setIsOpen] = React.useState(false);
    const postHandler = () => {
        setIsOpen(true);
    }
    const close = () => {
        setIsOpen(false);
    }

    return (
        <div>  
            <InputPostWrapper>
                <InputPostContent>
                    {Users.map((u) => (
                        <Avatar src={u.profilePicture} key={u.userid}/>
                    ))}
                    <InputFieldText onClick={postHandler}>What do you think?</InputFieldText>
                </InputPostContent>
                
                <InputPostAdd>
                    {addmore?.map((btn) =>(
                        <InputAdd key={btn.button}>
                            <IconInput>{btn.icon}</IconInput>
                            <ButtonInput>{btn.button}</ButtonInput>
                        </InputAdd>
                    ))}
                </InputPostAdd>
                <InputPostButton>Post</InputPostButton>
            </InputPostWrapper>
            {isOpen ? <CreatePost close={close}/> : ""}
        </div>
    )
    
}
