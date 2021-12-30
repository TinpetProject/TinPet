import React, { useState, useEffect } from "react";
import "./CompleteProfile.css";
import { Icon } from "@iconify/react";
import axios, { Axios } from "axios";
import InputText from "../../components/CompleteProfile/InputText";
import InputSelection from "../../components/CompleteProfile/InputSelection";
import InputDate from "../../components/CompleteProfile/InputDate";

export default function CompleteProfile() {
    const genderOptions = [
        { label: "Female", value: "female" },
        { label: "Male", value: "male" },
    ];

    const [breeds, setBreeds] = useState([]);
    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);

    const [pictureProfile, setPictureProfile] = useState("");
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [breed, setBreed] = useState([]);
    const [birthday, setBirthday] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");

    useEffect(() => {
        const getData = async () => {
            const res = await axios("https://countriesnow.space/api/v0.1/countries");
            // return await res.json();
            setCountries(await res.data.data);
        };
        getData();
    }, []);

    useEffect(() => {
        const found = countries.find((element) => element.country === country);
        setCity("");

        if (found === undefined) {
            setCities([]);
        } else {
            setCities(found.cities);
        }
    }, [country]);

    const clearBtnHandler = () => {
        setName("");
        setGender("");
        setCity("");
        setCountry("");
        setBirthday("");
    };

    const submitBtnHandler = () => {
        console.log(name, gender, birthday, country, city, pictureProfile);
    };

    const uploadPhotoHandler = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "pahpgw4x");

        try {
            setPictureProfile("./assets/img/giphy.gif");
            const res = await axios.post("https://api.cloudinary.com/v1_1/thecodingpanda/upload", formData);
            console.log(res.data.url);
            setPictureProfile(res.data.url);
        } catch (error) {}
    };

    return (
        <div className="complete-profile__wrapper">
            <div className="complete-profile__background"></div>
            <div className="complete-profile__container">
                <div className="complete-profile__logo-wrapper">
                    <Icon className="complete-profile__logo" icon="icons8:cat-footprint" />
                    <span>Tinpet</span>
                </div>

                <div className="complete-profile__upload-photo">
                    <img src={`${pictureProfile ? pictureProfile : "./assets/img/ava-pending.png"}`} alt="" />
                    <label htmlFor="upload-photo">
                        {<Icon icon="carbon:cloud-upload" color="#373737" />}
                        {<span>Upload photo</span>}
                    </label>
                    <input type="file" name="" id="upload-photo" onChange={uploadPhotoHandler} />
                </div>

                <div className="complete-profile__input-fields">
                    <InputText label="Name" placeholder="-- Pet name -- " value={name} setValue={setName} />
                    <InputSelection label="Gender" placeholder="-- Gender --" list={genderOptions} value={gender} setValue={setGender} />
                    <InputDate label="D.O.B" value={birthday} setValue={setBirthday} />
                    <InputSelection label="Breed" placeholder="-- Breed --" list={breeds} value={breed} setValue={setBreed} />
                    <InputSelection label="Location" placeholder="-- Country -- " list={countries} value={country} setValue={setCountry} />
                    <InputSelection label="" placeholder="-- City --" list={cities} condition={country} value={city} setValue={setCity} />
                </div>

                <div className="complete-profile__buttons">
                    <button type="button" className="complete-profile__clear-btn" onClick={clearBtnHandler}>
                        Clear
                    </button>
                    <button type="button" className="complete-profile__submit-btn" onClick={submitBtnHandler}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}
