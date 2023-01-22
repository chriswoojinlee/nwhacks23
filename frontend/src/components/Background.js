import bgImage from "../components/img/bg_image_landing.png";
import bgLoading from "../components/img/bg_loading.png";
import React, { useEffect, useRef } from "react"
import Searchbar from "../components/Searchbar";
import DatePicker from "../components/DatePicker";
import styled from "styled-components";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import loading from "../components/img/loading.gif";
import { useState} from "react";


const Background = () => {
  const MyIcon = styled.img`
  align: center;
  z-index: 1;
  position: fixed;
  width: 100%;
  height: 100vh;

`;

MyIcon.defaultProps = {
  src: loading,
};

return (
    <div> 
      <MyIcon></MyIcon>
    </div> 

);


};
 
 export default Background;
 