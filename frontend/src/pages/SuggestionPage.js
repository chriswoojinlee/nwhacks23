import bgImage from "../components/img/bgImage.png";
import playButton from "../components/img/playbutton.png";
import React from "react"
import styled from "styled-components";
import './css/LandingPage.css';
import Button from "../components/Button";

const list = ["YVR", "YYC", "YYZ", "YYL", "YYG"];

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


const WhiteBlock = styled.div`
display: inline-block;
min-width: 100%;
height: 80%;
border-radius: 35px;
background: white;
`;

const MyIcon = styled.img`
  width: 80%;
  height: 90%;
`;

MyIcon.defaultProps = {
  src: playButton,
};

const ImageText = ({text}) => {
    return(
            <ImageTextWrapper>
            <WhiteBlock>
                <FlightText>
                    {text}
                </FlightText>
            </WhiteBlock>
            <MyIcon />
            </ImageTextWrapper>
    );
}

const TitleText = styled.h1`
  fontFamily:'Gotham-Medium, Gotham';
  font-size: 65px;
  font-weight: 700;
  color: #E5978E;
  flexWrap: 'wrap';
`;

const FlightText = styled.h1`
  font-size: 1.8em;
  font-weight: 600;
  text-align: left;
  color: #7d69a2;
  fontFamily:'Gotham-Medium, Gotham';
  padding-left: 3%;
  padding-bottom: 2%;
`;

const TextInfo= styled.p`
  font-size: 30px;
  font-height: 10px;
  fontFamily:'Gotham-Medium, Gotham';
  color: #707070;
  flexWrap: 'wrap';
`;

const ImageTextWrapper = styled.div`
display: grid;
grid-template-columns: 7fr 1fr;
align-items: left;
text-align: left;
`

const Wrapper = styled.div`
display: grid;
grid-template-rows: 9vh 9vh 9vh 9vh 9vh 9vh 9vh 9vh;
align-items: center;
justify-items: flex-start; /* adjusted */
row-gap: 5px;
`

const Container = styled.div`
height: 800px;
width: 1000px;
display: flex;
justify-content: space-between;
align-items: center;
padding-left: 8%;
padding-top: 6%;
position: relative;
display: flex;
`
const ButtonContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
justify-content: space-between;
`

export const SuggestionPage = () => {
    return ( 

            <div style={style.background}>
                <ButtonContainer>
                <Container>
                <Wrapper>
                <TitleText>Trip Idea's</TitleText>
                <TextInfo>See a trip that peaks your interest? Click on it for more info!</TextInfo>
                {list.map((item) => <ImageText text={item + " ---------------> " + item} />)}
            <ButtonContainer>
            <Button bgColor={true} text={"New Search"} />
                <Button bgColor={false} text={"Re-Generate"} />
            </ButtonContainer>

                </Wrapper>
                </Container>
                </ButtonContainer>
            </div>
        
  );

  }

  export default SuggestionPage;