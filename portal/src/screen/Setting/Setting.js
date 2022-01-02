import React from 'react';
import "./Setting.css";
import { Icon } from "@iconify/react";
import Avatar from "@mui/material/Avatar";

export default function Setting({userID, hideSetting}) {
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
            placeholder: "Vietnam"
        },
        {
            title: "City",
            placeholder: "Hanoi"
        }
    ];
    const inputright = [
        {
            title: "Name",
            placeholder: "Shiba"
        },
        {
            title: "Date of Birth",
            placeholder: "dd/mm/yyyy"
        },
        {
            title: "Gender",
            placeholder: "Male/Female"
        },
        {
            title: "Breed",
            placeholder: "Shiba"
        }
    ];

    
    return (
        <div className="container">
            <div className="container-layout" onClick={hideSetting}></div>
            <div className="container-content-wrapper">
                <div className="content-box-sidebar">
                    <div className="content-box-sidebar-user">
                        <Avatar className="avatar" 
                            src="https://lh6.googleusercontent.com/proxy/TzFjtW4IYw1Ct9IGlUbmq_GNXCjqGfKucN1irkehgc8kKNyIKLm9HEdcbgeoMlL27I5dGrxpslMZttyw6JKGslKObBJ7K1Su50OL3npuVhy5VDFeCC2laqmZcalwMaBQdXaxqCIpj1fPb8HtFJIzxzM" 
                            alt="corgi"
                        /> 
                        <div className="name"> Shiba</div>
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

                <div className="content-box-main">
                    <div className="content-box-main-header">
                        <div className="title">Account</div>
                        <div className="close">
                            <Icon className="menu__signout-icon" icon="carbon:close" />
                        </div>
                    </div>
                    <div className="content-box-main-mid">
                        <div className="left">
                            <div className="User"></div>

                            {inputleft.map((item) => (
                                <div className="sidebar-menu"  key={item.title}>
                                    <div className="sidebar-element">
                                        {item.icon}
                                        <div className="sidebar-element-title"> {item.title} </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="right">
                            {inputright.map((item) => (
                                <div className="sidebar-menu"  key={item.title}>
                                    <div className="sidebar-element">
                                        {item.icon}
                                        <div className="sidebar-element-title"> {item.title} </div>
                                    </div>
                                </div>
                            ))}
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
