import React, { useState } from "react"
import { countries } from 'country-list-json';
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./css/Searchbar.css"


const Line = styled.hr`
border-top: 1px solid rgba(216, 216, 216, 0.753);
`

const Searchbar = ({placeholder}) => {
    const [search, setSearch] = useState("");
    const [suggest, setSuggest] = useState([]);
    const [resfound, setResfound] = useState(true);

    // const searchCountry = countries.filter((country) => {
    //   return country.name.toString().toLowerCase() === "" ? country : country.name.toString().toLowerCase().includes(search.toLowerCase())
    // }).map((country) => <div key={country.name}>{country.name}</div>);
    // // { listItems }
    // // 

    const handleChange = (e) => {
      let searchVal = e.target.value;
      let suggestion = [];

      if (searchVal.length > 0) {
        suggestion = countries
        .filter((country) => country.name.toString().toLowerCase().includes(searchVal.toLowerCase()))
        .map((country) => country.name);

        setResfound(suggestion.length !== 0 ? true : false);
      }
      setSearch(searchVal);
      setSuggest(suggestion);
    }

    const suggestedText = (value) => {
      setSearch(value);
      setSuggest([]);
      console.log(value);
    };
  

    const getSuggestions = () => {
      if (suggest.length === 0 && search !== "" && !resfound) {
        return <p>Search Content Not Found</p>;
      }

      return (
        <div>
          {suggest.map((item, index) => {
            return (
              <div key={index}>
                <div className="suggestion"
                onClick={() => suggestedText(item)}>{item}
                </div>
                {index !== suggest.length - 1 && <Line />}
              </div>
            );
          })}
        </div>
      );
    }

    return(
        <div className="searchcontainer">
                <input className="search"
                onChange={handleChange} 
                placeholder={placeholder}/>
              { getSuggestions() }
            </div>
            
    );

    
}

export default Searchbar;
