import React from "react";
import {
  IconWrapper2,
  FilterWrapper,
  FilterTitle,
  FilterList,
  FilterItem,
} from "./style";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const cities = [
  {
    id: 1,
    name: "Hà Nội",
  },
  {
    id: 2,
    name: "Tp Hồ Chí Minh",
  },
  {
    id: 3,
    name: "Đà Nẵng",
  },
  {
    id: 4,
    name: "Huế",
  },
  {
    id: 5,
    name: "Nam Định",
  },
  {
    id: 7,
    name: "Thanh Hóa",
  },
  {
    id: 8,
    name: "Nghệ An",
  },
  {
    id: 9,
    name: "Quảng Bình",
  },
  {
    id: 10,
    name: "Nha Trang",
  },
  {
    id: 11,
    name: "Quảng Ninh",
  },
  {
    id: 12,
    name: "Vũng Tàu",
  },
  {
    id: 13,
    name: "Quảng Ngãi",
  },
  {
    id: 14,
    name: "Hải Dương",
  },
  {
    id: 15,
    name: "Cà Mau",
  },
  {
    id: 16,
    name: "Hải Phòng",
  },
  {
    id: 17,
    name: "Bắc Ninh",
  },
  {
    id: 18,
    name: "Ninh Bình",
  },
  {
    id: 19,
    name: "Phú Thọ",
  },
  {
    id: 20,
    name: "Hưng Yên",
  },
];

const Filter = () => {
  return (
    <FilterWrapper>
      <FilterTitle>City</FilterTitle>
      <IconWrapper2>
        <ArrowDropDownIcon></ArrowDropDownIcon>
      </IconWrapper2>
      <FilterList>
        {cities.map((city, index) => (
          <FilterItem key={index}>
            {city.id}. {city.name}
          </FilterItem>
        ))}
      </FilterList>
    </FilterWrapper>
  );
};

export default Filter;
