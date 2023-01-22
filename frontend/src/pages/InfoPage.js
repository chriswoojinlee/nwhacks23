
import * as React from 'react';
import bgImage from "../components/img/bgImage.png";
import Tabs from '../components/TabButton';
import RiskComp from '../components/RiskComp';
import styled from "styled-components";
import TripComp from '../components/TripComp';
import { Link } from "react-router-dom";
import Button from "../components/Button";

const style = {
  background: {backgroundImage: `url(${bgImage})`,
    backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
        height:  '103vh',
        width: '100vw'
        
  },
  button: {
    top: 274,
    left: 120,
    position: 'absolute'
  },

  tab: {
    borderTopLeftRadius: 19,
      borderBottomRightRadius: 19,
      borderTopRightRadius: 19,
      borderBottomLeftRadius: 19,
      border: 'none',
      fontFamily:'Gotham-Medium, Gotham',
  },

  risk: {
    borderTopLeftRadius: 19,
    borderBottomRightRadius: 19,
    borderTopRightRadius: 19,
    borderBottomLeftRadius: 19,
    border: 'none',
    fontFamily:'Gotham-Medium, Gotham',
    fontSize: 30,
    color: 'white',
    fontWeight: 500,
    width: 216,
    height: 73,
    marginLeft: 10
  }

 
};

const WhiteBlock = styled.div`
display: inline-block;
min-width: 20em;
max-height: 80%;
border-radius: 35px;
background: white;
`;

const Wrapper = styled.div`
display: grid;
grid-template-rows: 9vh 9vh 9vh 9vh 9vh 9vh 9vh 9vh;
align-items: center;
justify-items: flex-start; /* adjusted */
row-gap: 4px`;

const ButtonContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
justify-content: space-between;
padding-left: 40%;
padding-top: 65%;
grid-gap: 10px;
`


const InfoPage = () => {
  return ( 
        <div style={style.background}>
        <Wrapper>
            <TripComp text={'YVR ----------------------> YVV '}> </TripComp> 
        
        <Tabs > 
            <div label="Regular">
              Balls
            </div>
            <div label="OfficialTravel">
              E
            </div>
            <div label="Visa">
              Whore
            </div>
            <div label="Flight Info">
              EM
            </div>

        </Tabs>
        <ButtonContainer>
              <Link to="/suggestion">
              <Button bgColor={true} text={"New Search"} />
              </Link>
            <Link to="/">
            <Button bgColor={false} text={"Go Back"} />
            </Link>
                
            </ButtonContainer>
        </Wrapper>
        <div>
           <RiskComp text={'LSKDjflkdj'}></RiskComp>
        </div>
        
       
      </div>
      
  );
};

export default InfoPage;
