import React from "react";
import styled from "styled-components";

// colour of the text should just be pink
const StyledButton = styled.button`
  background: ${props => props.bgColor ? "#7d69a2" : "white"};
  color: #f5c8ce;
  font-size: 24px;
  min-width: 10.5%;
  min-height: 8%;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 35px;
  border: none;
  white-space: nowrap;
  margin: auto;  
  font-weight: bold;
`;

const Button = ({bgColor, text}) => {
    return(
        bgColor ?
        <StyledButton onClick={(e) => {console.log(e)}}>{text}</StyledButton> : 

         <StyledButton bgColor>{text}</StyledButton>
    );
}

export default Button;

