import bgImage from "../components/img/bg_image_landing.png";
import React from "react"
import Searchbar from "../components/Searchbar";
import DatePicker from "../components/DatePicker";
import styled from "styled-components";
import './css/LandingPage.css';
import Button from "../components/Button";
import { Link } from "react-router-dom";

const style = {
    background: {backgroundImage: `url(${bgImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    resizeMode: 'contain',
    width: window.outerWidth,
    height: window.outerHeight
    },
  }

const TitleText = styled.h1`
  fontFamily:'Gotham-Medium, Gotham';
  font-size: 65px;
  font-weight: 700;
  color: #E5978E;
  flexWrap: 'wrap';
`;


const TextInfo= styled.p`
  font-size: 30px;
  font-height: 10px;
  fontFamily:'Gotham-Medium, Gotham';
  color: #707070;
  flexWrap: 'wrap';
`;

const Wrapper = styled.div`
display: grid;
grid-template-rows: 9vh 9vh 9vh 9vh 9vh 9vh;
align-items: center;
justify-items: flex-start; /* adjusted */
row-gap: 5px;
`

const Container = styled.div`
height: 800px;
width: 600px;
display: flex;
justify-content: space-between;
align-items: center;
padding-left: 8%;
padding-top: 6%;
position: relative;

`

const ButtonContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
justify-content: space-between;
`

export const LandingPage = () => {
    return ( 

            <div style={style.background}>
                <Container>
                <Wrapper>
                <TitleText> The Sky's the Limit</TitleText>

                <TextInfo>Enter your location, destination, and dates and see what travel options work for you.</TextInfo>
            <Searchbar placeholder={"Starting Destination"} />
            <Searchbar placeholder={"Ending Destination"} />
            <DatePicker />
            <ButtonContainer>
              <Link to="/info"><Button bgColor={true} text={"Search"} /></Link>
              <Link to="/budget"><Button bgColor={false} text={"Not Sure"} /></Link>
            </ButtonContainer>

                </Wrapper>
                </Container>

            </div>
        
  );

  }

  export default LandingPage;