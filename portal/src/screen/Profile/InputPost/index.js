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
import CreatePost from "./CreatePost/CreatePost"



export default function InputPost({ user, setReload,updatePostList }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const openPostDetail = () => {
        setIsOpen(true);
    }
    const closePostDetail = () => {
        setIsOpen(false);
    }

    const addmore = [
        {
            icon: <PermMediaIcon />,
            button: "Pictures/Videos",
            handler: openPostDetail
        },
        {
            icon: <LoyaltyIcon />,
            button: "Tag",
            handler: openPostDetail
        },
    ];

    return (
        <div>
            <InputPostWrapper>
                <InputPostContent>
                    <Avatar src={user.avatar} key={user.userID} />
                    <InputFieldText onClick={openPostDetail}>What do you think?</InputFieldText>
                </InputPostContent>

                <InputPostAdd>
                    {addmore?.map((btn) => (
                        <InputAdd key={btn.button} onClick={btn.handler}>
                            <IconInput>{btn.icon}</IconInput>
                            <ButtonInput>{btn.button}</ButtonInput>
                        </InputAdd>
                    ))}
                </InputPostAdd>
                <InputPostButton onClick={openPostDetail}>Post</InputPostButton>
            </InputPostWrapper>
            {isOpen ? <CreatePost closePostDetail={closePostDetail} user={user} updatePostList={updatePostList} /> : ""}
        </div>
    )

}
