import React, { useState, useEffect } from "react";
import "./Setting.css";
import { Icon } from "@iconify/react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";

export default function Setting({ userID, hideSetting }) {
    const [user, setUser] = React.useState({});
    const [breedList, setBreedList] = useState([]);
    const [countryList, setCountryList] = useState([]);
    const [cityList, setCityList] = useState([]);
    // const [country, setCountry] = useState("");
    // const [city, setCity] = useState("");
    const [currentCity, setCurrentCity] = useState("");
    const [currentCountry, setCurrentCountry] = useState("");
    // const location = useLocation();

    React.useEffect(() => {
        const getUser = async () => {
            await axios
                .get(`/user/${userID}/profile`)
                .then((response) => {
                    setUser({ ...response.data.data, breed: response.data.data.breed.charAt(0).toUpperCase() + response.data.data.breed.slice(1) });
                })
                .catch((error) => console.log(error));
        };

        userID && getUser();
    }, [userID]);

    // console.log(user);
    console.log("current", currentCity, currentCountry)

    useEffect(() => {
        const getData = async () => {
            const res = await axios("https://countriesnow.space/api/v0.1/countries");
            setCountryList(await res.data.data);
        };
        getData();

        var requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        fetch("http://localhost:8888/pet/breeds", requestOptions)
            .then((response) => response.json())
            .then((result) => result.data.map((el) => ({ br: el.name.charAt(0).toUpperCase() + el.name.slice(1) })))
            .then((breeds) => {
                setBreedList(breeds);
            })
            .catch((error) => console.log("error", error));
    }, []);

    useEffect(() => {
        const found = countryList.find((element) => element.country === currentCountry);
        // setCurrentCity("");

        if (found === undefined) {
            setCityList([]);
        } else {
            setCityList(found.cities);
        }

    }, [currentCountry]);

    useEffect(() => {
        const getCityCountry = () => {
            if (user.location) {
                const location = user.location ? user.location.split(', ') : "";
                if (location) {
                    const curCity = location[0];
                    const curCountry = location[1];
                    setCurrentCity(curCity);
                    setCurrentCountry(curCountry);
                    // console.log(curCity, curCountry)
                }
            }
        };
        user && getCityCountry();
    }, [user])

    const renderOptions = (p) => {
        let countryOptionsList = countryList.map((el, index) => {
            return (
                <option key={index} value={el.country}>
                    {el.country}
                </option>
            );
        });

        let cityOptionsList = cityList.map((el, index) => {
            return (
                <option key={index} value={el}>
                    {el}
                </option>
            );
        });

        let breedOptionsList = breedList.map((el, index) => {
            return (
                <option key={index} value={el.br}>
                    {el.br}
                </option>
            );
        });

        if (p === "Country") {
            return countryOptionsList;
        }
        if (p === "City") {
            return cityOptionsList;
        }
        if (p === "Breed") {
            return breedOptionsList;
        }
    };

    useEffect(() => {
        renderOptions();
    }, [cityList]);

    const mainMenu = [
        {
            icon: <Icon className="menu__account-icon" icon="mdi:account-circle-outline" />,
            title: "Account",
        },
        {
            icon: <Icon className="menu__general-icon" icon="ep:setting" />,
            title: "General",
        },
        {
            icon: <Icon className="menu__advance-icon" icon="carbon:audio-console" />,
            title: "Advance",
        },
    ];
    
    return (
        <div className="container">
            <div className="container-layout" onClick={hideSetting}></div>
            <div className="container-content-wrapper">
                {/* sidebar */}
                <div className="content-box-sidebar">
                    <div className="content-box-sidebar-user">
                        <img src={user.avatar} className="avatar" alt="Shiba" />
                        <div className="id">
                            <div className="name"> {user.name}</div>
                            <div className="email"> {user.mail}</div>
                        </div>
                    </div>
                    <div className="content-box-sidebar-menu">
                        {mainMenu.map((item) => (
                            <div className="sidebar-menu" to={item.path} key={item.title}>
                                <div className={`sidebar-element ${item.title === "Account" ? "selected" : ""}`}>
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
                            <Icon className="menu__signout-icon" icon="carbon:close" style={{ fontSize: "2rem" }} />
                        </div>
                    </div>
                    <div className="content-box-main-mid">
                        <div className="left">
                            <div className="user">
                                <div className="title">Photo</div>
                                <div className="edit-avatar">
                                    <img src={user.avatar} className="avatar" alt="Shiba" />
                                    <div className="edit">
                                        <div className="name">{user.name}</div>
                                        <div className="btn">
                                            <Icon icon="carbon:cloud-upload" /> Upload Photo
                                        </div>
                                        <div className="note">Pick a photo up to 4MB</div>
                                    </div>
                                </div>
                            </div>

                            <div className="detail-edit" >
                                <label className="title">Country</label>
                                <select
                                    className="option-fields"
                                    onChange={(e) => {
                                        setCurrentCountry(e.target.value);
                                    }}
                                    value={currentCountry}
                                >
                                    {renderOptions("Country")}
                                </select>
                            </div>
                            <div className="detail-edit">
                                <label className="title">City</label>
                                <select
                                    className="option-fields"
                                    onChange={(e) => {
                                        setCurrentCity(e.target.value);
                                    }}
                                    value={currentCity}
                                >
                                    {renderOptions("City")}
                                </select>
                            </div>
                        </div>
                        <div className="right">
                            <div className="detail-edit">
                                <div className="title">Name</div>
                                <div className="fieldtext" contentEditable={true} data-text="Type here...">
                                    {user.name}
                                </div>
                            </div>
                            <div className="detail-edit">
                                <div className="title">Date of Birth</div>
                                <div className="fieldtext" contentEditable={true} data-text="Type here...">

                                </div>
                            </div>
                            <div className="detail-edit">
                                <div className="title">Gender</div>
                                <div className="fieldtext" contentEditable={true} data-text="Type here...">
                                    {user.gender}
                                </div>
                            </div>
                            <div className="detail-edit">
                                <label className="title">Breed</label>
                                <select className="option-fields" value={user.breed}>{renderOptions("Breed")}</select>
                            </div>

                            <div className="update-profile-btn">Update profile</div>
                        </div>
                    </div>
                    <div className="content-box-main-bottom">
                        <div className="title">Permanently delete account</div>
                        <div className="content">
                            This will immediately delete all of your data including tasks, projects, comments, and more. This can’t be
                            undone. Learn more.
                        </div>
                        <button className="delete">Permanently delete account</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
