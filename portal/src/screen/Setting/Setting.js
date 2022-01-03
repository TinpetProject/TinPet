import React from 'react';
import "./Setting.css";
import { Icon } from "@iconify/react";

export default function Setting({userID},props) {
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
            <div className="container-layout" onClick={props.hideSetting}></div>
            <div className="container-content-wrapper">
{/* sidebar */}
                <div className="content-box-sidebar">
                    <div className="content-box-sidebar-user">
                        <img src="https://lh6.googleusercontent.com/proxy/TzFjtW4IYw1Ct9IGlUbmq_GNXCjqGfKucN1irkehgc8kKNyIKLm9HEdcbgeoMlL27I5dGrxpslMZttyw6JKGslKObBJ7K1Su50OL3npuVhy5VDFeCC2laqmZcalwMaBQdXaxqCIpj1fPb8HtFJIzxzM" 
                        className="avatar" alt="Shiba"/>
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
{/* main */}
                <div className="content-box-main">
                    <div className="content-box-main-header">
                        <div className="title">Account</div>
                        <div className="close" onClick={props.hideSetting}>
                            <Icon className="menu__signout-icon" icon="carbon:close" style={{ fontSize: '2rem' }}/>
                        </div>
                    </div>
                    <div className="content-box-main-mid">
                        <div className="left">
                            <div className="user">
                                <div className="title">Photo</div>
                                <div className="edit-avatar">
                                    <img src="https://lh6.googleusercontent.com/proxy/TzFjtW4IYw1Ct9IGlUbmq_GNXCjqGfKucN1irkehgc8kKNyIKLm9HEdcbgeoMlL27I5dGrxpslMZttyw6JKGslKObBJ7K1Su50OL3npuVhy5VDFeCC2laqmZcalwMaBQdXaxqCIpj1fPb8HtFJIzxzM" 
                                    className="avatar" alt="Shiba"/>
                                    <div className="edit">
                                        <div className="name">Shiba</div>
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
