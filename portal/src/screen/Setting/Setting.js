import React from 'react';
import "./Setting.css";
import { Icon } from "@iconify/react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";

export default function Setting({hideSetting}) {
    const [user, setUser] = React.useState({});
    const [selectedUser, setSelectedUser] = React.useState(useParams().chosenUserID);
    const location = useLocation();
    React.useEffect(() => {
        if (location && location.pathname) {
        const id = location.pathname.split("/")[2];
        setSelectedUser(id);
        }
    }, [location]);
    // React.useEffect(()=>{
    // const fetchList = async () => {
    //   const result = await fetch(`http://localhost:8888/user/:userid/profile`, {
    //     method: "GET",
    //     headers: {
    //       accept: "application/json",
    //       "Content-Type": "application/json",
    //       authorization: `Bearer ${token}`,
    //     },
    //   });
    //   console.log(result);
    // };
    // token && fetchList();
    // },[]);

    React.useEffect(() => {
        // if(selectedUser !== userID) {
        //   setSelectedUser(userID);
        // }
        const getUser = async () => {
            axios
                .get(`/user/${selectedUser}/profile`)
                .then((response) => {
                // console.log(response);
                setUser({
                    ...response.data.data,
                    avatar: response.data.data.avatar || "https://res.cloudinary.com/thecodingpanda/image/upload/v1641272668/zoyndaseei9wnbrybwxr.png?fbclid=IwAR2YOBaBi-4FdUEFD_XjI9vgrwHAcfpupP8vnGS7p26Lrq8v3XGzFvD3pxk",
                });
                })
                .catch((error) => console.log(error));
        };
        selectedUser && getUser();
    }, [selectedUser]);

    const mainMenu = [
        {
            icon: <Icon className="menu__account-icon" icon="mdi:account-circle-outline" />,
            title: "Account"
        },
        {
            icon: <Icon className="menu__general-icon" icon="ep:setting" />,
            title: "General"
        },
        {
             icon: <Icon className="menu__advance-icon" icon="carbon:audio-console" />,
            title: "Advance"
        }
    ];
    const inputleft = [
        {
            title: "Country",
            placeholder: ""
        },
        {
            title: "City",
            placeholder: ""
        }
    ];
    const inputright = [
        {
            title: "Name",
            field: ""
        },
        {
            title: "Date of Birth",
            field: ""
        },
        {
            title: "Gender",
            field: ""
        },
        {
            title: "Breed",
            field: ""
        }
    ];

    return (
        <div className="container">
            <div className="container-layout" onClick={hideSetting}></div>
            <div className="container-content-wrapper">
{/* sidebar */}
                <div className="content-box-sidebar">
                    <div className="content-box-sidebar-user">
                        <img src={user.avatar} 
                        className="avatar" alt="Shiba"/>
                        <div className='id'>
                            <div className="name"> {user.name}</div>
                            <div className="email"> {user.email}</div>
                        </div>
                    </div>
                    <div className="content-box-sidebar-menu">
                        {mainMenu.map((item) => (
                            <div className="sidebar-menu" to={item.path} key={item.title}>
                                <div className="sidebar-element">
                                    {item.icon}
                                    <div className="sidebar-element-title"> {item.title} </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="content-box-sidebar-signout">
                        <li className="sidebar-element">
                            <Icon className="menu__signout-icon" icon="carbon:logout" />
                            <div className="sidebar-element-title"> Sign out </div>
                        </li>
                    </div>
                </div>
{/* main */}
    {/* Account */}
                <div className="content-box-main">
                    <div className="content-box-main-header">
                        <div className="title">Account</div>
                        <div className="close" onClick={hideSetting}>
                            <Icon className="menu__signout-icon" icon="carbon:close" style={{ fontSize: '2rem' }}/>
                        </div>
                    </div>
                    <div className="content-box-main-mid">
                        <div className="left">
                            <div className="user">
                                <div className="title">Photo</div>
                                <div className="edit-avatar">
                                    <img src={user.avatar} 
                                    className="avatar" alt="Shiba"/>
                                    <div className="edit">
                                        <div className="name">{user.name}</div>
                                        <div className="btn">
                                            <Icon icon="carbon:cloud-upload"/> Upload Photo
                                        </div>
                                        <div className="note">Pick a photo up to 4MB</div>
                                    </div>
                                </div>
                            </div>
                            {inputleft.map((item) => (
                                <div className="detail-edit"  key={item.title}>
                                    <div className="title">{item.title}</div>
                                    <div className="fieldtext" 
                                    contentEditable={true} 
                                    data-text="Type here..."
                                    > 
                                        {item.field}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="right">
                            {inputright.map((item) => (
                                <div className="detail-edit"  key={item.title}>
                                    <div className="title">{item.title}</div>
                                    <div className="fieldtext" 
                                    contentEditable={true} 
                                    data-text="Type here..."
                                    > 
                                        {item.field}
                                    </div>
                                </div>
                            ))}
                            <div className="update-profile-btn">
                                Update profile
                            </div>
                        </div>
                    </div>
                    <div className="content-box-main-bottom">
                        <div className="title">Permanently delete account</div>
                        <div className="content">This will immediately delete all of your data including tasks, projects, comments, and more. This can’t be undone. Learn more.</div>
                        <button className="delete">Permanently delete account</button>
                    </div>
                </div>
                            


            </div>
        </div>
    )
};
