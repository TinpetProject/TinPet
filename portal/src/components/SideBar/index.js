import React from "react";
import { SideBarWrapper, SideBarElement, SideBarList, SideBarElementTitle, SideBarElementQuantity, SideBarListTitle } from "./style";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ViewListIcon from "@mui/icons-material/ViewList";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import ForumIcon from "@mui/icons-material/Forum";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { Icon } from "@iconify/react";
import "./style.css";

const mainMenu = [
    {
        icon: <Icon className="menu__dashboard-icon" icon="carbon:archive" />,
        title: "Dashboard",
        quantity: 24,
    },
    {
        icon: <Icon className="menu__heart-icon" icon="teenyicons:heart-circle-outline" />,
        title: "Matches",
        quantity: 10,
    },
    {
        icon: <Icon className="menu__message-icon" icon="teenyicons:message-text-alt-outline" />,
        title: "Messages",
        quantity: "99+",
    },
    {
        icon: <Icon className="menu__favor-icon" icon="akar-icons:heart" />,
        title: "Favorite",
        quantity: 3,
    },
    {
        icon: <Icon className="menu__list-icon" icon="fluent:apps-list-20-regular" />,
        title: "Pet List",
        quantity: 18,
    },
];

const other = [
    {
        icon: <Icon className="menu__setting-icon" icon="simple-line-icons:settings" />,
        title: "Settings",
    },
    {
        icon: <Icon className="menu__logout-icon" icon="icon-park-outline:logout" />,
        title: "Log out",
    },
];

const SideBar = () => {
    return (
        <SideBarWrapper>
            <SideBarList>
                <SideBarListTitle>Main menu</SideBarListTitle>
                {mainMenu?.map((item, index) => (
                    <SideBarElement key={index}>
                        {item.icon}
                        <SideBarElementTitle>{item.title}</SideBarElementTitle>
                        <SideBarElementQuantity>{item.quantity}</SideBarElementQuantity>
                    </SideBarElement>
                ))}
                <SideBarListTitle>Other</SideBarListTitle>
                {other?.map((item, index) => (
                    <SideBarElement key={index}>
                        {item.icon}
                        <SideBarElementTitle>{item.title}</SideBarElementTitle>
                    </SideBarElement>
                ))}
            </SideBarList>
        </SideBarWrapper>
    );
};

export default SideBar;
