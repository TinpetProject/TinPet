import React from "react";
import {
  SideBarWrapper,
  SideBarElement,
  SideBarList,
  SideBarElementTitle,
  SideBarElementQuantity,
  SideBarListTitle,
} from "./style";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ViewListIcon from "@mui/icons-material/ViewList";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import ForumIcon from "@mui/icons-material/Forum";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

const mainMenu = [
  {
    icon: <DashboardIcon></DashboardIcon>,
    title: "Dashboard",
    quantity: 24,
  },
  {
    icon: <ThumbsUpDownIcon></ThumbsUpDownIcon>,
    title: "Matches",
    quantity: 10,
  },
  {
    icon: <ForumIcon></ForumIcon>,
    title: "Messages",
    quantity: "99+",
  },
  {
    icon: <FavoriteBorderIcon></FavoriteBorderIcon>,
    title: "Favorite",
    quantity: 3,
  },
  {
    icon: <ViewListIcon></ViewListIcon>,
    title: "Pet List",
    quantity: 18,
  },
];

const other = [
  {
    icon: <SettingsIcon></SettingsIcon>,
    title: "Settings",
  },
  {
    icon: <LogoutIcon></LogoutIcon>,
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
