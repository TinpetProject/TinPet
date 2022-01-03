import React from "react";
import { SideBarWrapper, SideBarElement, SideBarList, SideBarElementTitle, SideBarElementQuantity, SideBarListTitle } from "./style";

import { Link } from "react-router-dom";

import { Icon } from "@iconify/react";
import "./style.css";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useState  } from "react";
import Setting from "../../screen/Setting/Setting";

const SideBar = () => {
    const history = useHistory();
    const [isShownSetting, setIsShownSetting] = useState(false);
    const mainMenu = [
        {
            icon: <Icon className="menu__dashboard-icon" icon="carbon:archive" />,
            title: "Dashboard",
            quantity: 24,
            path: "/dashboard",
        },
        {
            icon: <Icon className="menu__heart-icon" icon="teenyicons:heart-circle-outline" />,
            title: "Matches",
            quantity: 10,
            path: "/matches",
        },
        {
            icon: <Icon className="menu__message-icon" icon="teenyicons:message-text-alt-outline" />,
            title: "Messages",
            quantity: "99+",
            path: "/messenger/chats",
        },
        {
            icon: <Icon className="menu__favor-icon" icon="akar-icons:heart" />,
            title: "Favorite",
            quantity: 3,
            path: "/favorite",
        }, 
        {
            icon: <Icon className="menu__game-icon" icon="teenyicons:game-controller-outline" />,
            title: "Game",

            path: "/game",
        },
        {
            icon: <Icon className="menu__list-icon" icon="fluent:apps-list-20-regular" />,
            title: "Pet List",
            quantity: 18,
            path: "/petlist",
        },
    ];
    // const other = [
    //     {
    //         icon: <Icon className="menu__setting-icon" icon="simple-line-icons:settings" />,
    //         title: "Settings",
            
    //     },
    //     {
    //         icon: <Icon className="menu__logout-icon" icon="icon-park-outline:logout" />,
    //         title: "Log out",
    //         handler: () => {
    //             history.push("/login");
    //             localStorage.removeItem("token");
    //         },
    //     },
    // ];
    return (
        <SideBarWrapper>
            <SideBarList>
                <SideBarListTitle> Main menu </SideBarListTitle>
                {mainMenu.map((item) => (
                    <StyledLink to={item.path} key={item.title}>
                        <SideBarElement>
                            {item.icon}
                            <SideBarElementTitle> {item.title} </SideBarElementTitle>{" "}
                            <SideBarElementQuantity> {item.quantity} </SideBarElementQuantity>
                        </SideBarElement>
                    </StyledLink>
                ))}
                <SideBarListTitle> Other </SideBarListTitle>
                {/* {other.map((item) => (
                    <SideBarElement key={item.title} onClick={onclick}>
                        {item.icon}
                        <SideBarElementTitle> {item.title} </SideBarElementTitle>
                    </SideBarElement>
                ))} */}
                {/* Test */}
                    {/* setting */}
                <SideBarElement onClick={() => setIsShownSetting(true)}>
                    <Icon className="menu__setting-icon" icon="simple-line-icons:settings" />
                    <SideBarElementTitle> Settings </SideBarElementTitle>
                </SideBarElement>

                <Setting trigger={isShownSetting} setTrigger={setIsShownSetting}/>
                    {/* signout */}
                <SideBarElement
                    onClick={() => {   
                        history.push("/login");
                        localStorage.removeItem("token");
                    }}
                >
                    <Icon className="menu__logout-icon" icon="icon-park-outline:logout" />
                    <SideBarElementTitle> Sign out </SideBarElementTitle>
                </SideBarElement>

            </SideBarList>
        </SideBarWrapper>
    );
};

const StyledLink = styled(Link)`
    text-decoration: none !important;
`;

export default SideBar;
