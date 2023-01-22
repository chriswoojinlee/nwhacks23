

import React from "react";

const style={
    text: {
        borderTopLeftRadius: 19,
        borderBottomRightRadius: 19,
        borderTopRightRadius: 19,
        borderBottomLeftRadius: 19,
        border: 'none',
        backgroundColor: 'white' ,
        fontFamily:'Gotham-Thin,Gotham',
        fontSize:25,
        color: '#7D69A2',
        fontWeight: 300,
        marginLeft: 10,
        top: 365,
        left: 155,
        width: 877,
        resize: 'none',
        height: 351,
        position: 'absolute'
    }
}

 const FlightInfo = () => (
    <textarea style={style.text}>
    Hello there, this is some text in a text area
  </textarea>

 );
 
 export default FlightInfo;
 