import React, { useState, useEffect } from "react";
import "./CompleteProfile.css";
import { Icon } from "@iconify/react";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router";
import InputText from "../../components/CompleteProfile/InputText";
import InputSelection from "../../components/CompleteProfile/InputSelection";
import InputDate from "../../components/CompleteProfile/InputDate";

export default function CompleteProfile() {
    const genderOptions = [
        { label: "Female", value: 0 },
        { label: "Male", value: 1 },
    ];

    const [breeds, setBreeds] = useState([]);
    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);

    const [pictureProfile, setPictureProfile] = useState("");
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [breed, setBreed] = useState("");
    const [birthday, setBirthday] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const history = useHistory();
    useEffect(() => {
        const getData = async () => {
            const res = await axios("https://countriesnow.space/api/v0.1/countries");
            // return await res.json();
            setCountries(await res.data.data);
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
                setBreeds(breeds);
            })
            .catch((error) => console.log("error", error));
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
        setBreed("");
    };

    const submitBtnHandler = () => {
        var payload = {
            petName: name,
            gender,
            dob: birthday,
            breed,
            address: city + ", " + country,
            avtURL : pictureProfile,
            email : localStorage.getItem("email")
        }
        var requestOptions = {
            method: "POST",
            redirect: "follow",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json"
            },
        };
        console.log(name, gender != "" ? gender : 2, birthday, breed , country, city, pictureProfile, localStorage.getItem("email"));
        // TBNGOC: Thêm phần lưu thông tin pet

        fetch("http://localhost:8888/pet",requestOptions).then((response) => {
            if (response.status === 200) {
                toast.success("Complete profile success!", {
                    position: toast.POSITION.TOP_RIGHT,
                });
            }
            history.push("/login");
        })
    };

    const uploadPhotoHandler = async (e) => {
        const file = e.target.files[0];
        try {
            setPictureProfile("./assets/img/giphy.gif");
            var formdata = new FormData();
            formdata.append("file", file);
            formdata.append("upload_preset", "iiyjshqb");

            var requestOptions = {
                method: "POST",
                body: formdata,
                redirect: "follow",
            };

            fetch("https://api.cloudinary.com/v1_1/thecodingpanda/upload", requestOptions)
                .then((response) => response.json())
                .then((result) => setPictureProfile(result.url))
                .catch((error) => console.log("error", error));
            // setPictureProfile(res.data.url);
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
            s
        </div>
    );
}
