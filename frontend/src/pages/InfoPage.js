
import * as React from 'react';
import bgImage from "../components/img/bgImage_Info.png";
import Tabs from '../components/TabButton';
import RiskComp from '../components/RiskComp';
import styled from "styled-components";
import TripComp from '../components/TripComp';
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Background from '../components/Background';
import { useState, useEffect } from 'react';
import axios from 'axios';


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

const headers = {
  "Content-Type": "application/json",
  'X-Requested-With': 'XMLHttpRequest',
  "Access-Control-Allow-Origin": "*",
  'Access-Control-Allow-Credentials': 'true',
  "Access-Control-Allow-Methods": "GET, POST",
  "Access-Control-Allow-Methods": "Content-Type, X-Auth-Token, Origin, Authorization",

};

const apiRequest = () => {
  axios.get('http://localhost:8080/travelInfo?country=south-africa', { headers })
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}

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
  const[loadingState, setLoading] = useState(false);
   useEffect (() => {
   setLoading(true);
    
   setTimeout(() => {
     setLoading(false);
   }, 2000);
  },[]);


  return ( 
        <div style={style.background}>
          {loadingState ? ( <div>
               <Background/>  
              </div> ) : 
              ( <div>
          <Wrapper>
            <TripComp text={'YVR ----------------------> CPT '} date={" 1/30/2023 ---> 2/21/2023"}> </TripComp> 
        
        <Tabs > 
            <div label="Regular">
            Your passport must be valid for at least 30 days beyond the date you expect to leave South Africa. Your passport must contain at least 2 empty visa pages for the necessary South African Temporary Residence Permit. Without it, you will be denied entry into the country.
            You may also be denied boarding at the point of departure if you don’t have enough blank pages for the visa. If you plan to visit neighbouring countries and return to South Africa, ensure that there are sufficient visa pages in your passport for those countries’ visas and those of South Africa.
            </div>
            <div label="Visa">
            Tourist visa: not required for stays up to 90 days <br />
            Business visa: not required for stays up to 90 days <br />
            Student permit: required <br />
            Employment permit: required <br /> <br />
            Canadians don't need a tourist visa to enter South Africa. However, upon arrival, immigration officials will issue a temporary residents visa (TRV) for up to 90 days. Check the expiry date of your TRV to ensure you don’t overstay.
            If you overstay without authority, you may be forced to pay a fine upon departure and/or can be refused entry for up to 5 years.
            offenders may be arrested before departure and detained until their court appearance. In such cases, visitors may face a very substantial fine and be deported at their own expense.
            </div>
            <div label="Other">
            Residence permit:
            If you reside in South Africa, you must have valid residence permit in your passport each time you enter and leave the country. <br /> <br />
            Dual citizenship: 
            Dual citizens must enter or depart South Africa using their South African passport only.
            For further information on dual citizenship, contact the High Commission for the Republic of South Africa in Ottawa. <br /> <br />
            Health screening: 
            Due to the ongoing outbreak of Ebola virus disease in neighbouring countries you may be subject to a quick thermal scanner screening and/or a health questionnaire at the airports upon boarding or disembarking a plane.


            </div>


        </Tabs>
        <ButtonContainer>
              <Link to="/suggestion">
              <Button bgColor={true} text={"Generate Trips"} />
              </Link>
            <Link to="/">
            <Button bgColor={false} text={"Go Back"} />
            </Link>
                
            </ButtonContainer>
        </Wrapper>
        <div>
           <RiskComp text={'Exercise a high degree of caution in South Africa due to the significant level of serious crime.'}></RiskComp>
        </div>
      </div>
    
              )}
       </div>
      );
      
};

export default InfoPage;
