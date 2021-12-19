import React, { useState } from "react";
import "./CompleteProfile.css";
import { Icon } from "@iconify/react";
import InputText from "../../components/CompleteProfile/InputText";
import InputSelection from "../../components/CompleteProfile/InputSelection";
import InputDate from "../../components/CompleteProfile/InputDate";

export default function CompleteProfile() {
    const genderOptions = [
        { label: "Female", value: "female" },
        { label: "Male", value: "male" },
    ];

    const [pictureProfile, setPictureProfile] = useState();
    const [name, setName] = useState();
    const [gender, setGender] = useState();
    const [birthday, setBirthday] = useState();
    const [city, setCity] = useState();
    const [country, setCountry] = useState();

    return (
        <div className="complete-profile__wrapper">
            <div className="complete-profile__background"></div>
            <div className="complete-profile__container">
                <div className="complete-profile__logo-wrapper">
                    <Icon className="complete-profile__logo" icon="icons8:cat-footprint" />
                    <span>Tinpet</span>
                </div>

                <div className="complete-profile__upload-photo">
                    <img
                        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*"
                        alt=""
                    />
                    <label for="upload-photo">
                        <Icon icon="carbon:cloud-upload" color="#373737" />
                        <span>Upload photo</span>
                    </label>
                    <input type="file" name="" id="upload-photo" value="" />
                </div>

                <div className="complete-profile__input-fields">
                    <InputText label="Name" placeholder="-- Pet name -- " />
                    <InputSelection label="Gender" placeholder="-- Gender --" />
                    <InputDate label="D.O.B" />
                    <InputSelection label="Breed" placeholder="-- Breed --" />
                    <InputSelection label="Location" placeholder="-- Country -- " />
                    <InputSelection label="" placeholder="-- City --" />
                </div>

                <div className="complete-profile__buttons">
                    <button type="" className="complete-profile__clear-btn">
                        Clear
                    </button>
                    <button type="" className="complete-profile__submit-btn">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}
