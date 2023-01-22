import React, { useState } from "react"
import { countries } from 'country-list-json';
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

// const renderCountry = (country, id) => {
//     return (
//         <li key={id}>
//           <b>{country.firstName} {country.lastName}</b> (<span>{country.info.age}</span>)
//         </li>
//     );
// }

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: papayawhip;
  border: none;
  border-radius: 3px
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Searchbar = () => {
    const [search, setSearch] = useState("");

    const listItems = countries.map((country) => <div>{country.name}</div>);

    const searchCountry = countries.filter((country) => {
      return country.name.toString().toLowerCase() === "" ? country : country.name.toString().toLowerCase().includes(search.toLowerCase())
    }).map((country) => <div key={country.name}>{country.name}</div>);
    // { listItems }
    // 

    return(
        <div>
            <Form>
              <InputGroup>
              <Form.Control 
              onChange={(e) => setSearch(e.target.value)} 
              placeholder="Search Country" />
              </InputGroup>
            </Form>
            <div>
              { searchCountry }
            </div>
        </div>
    );

    
}

export default Searchbar;
