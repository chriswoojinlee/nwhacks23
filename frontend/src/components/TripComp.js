import React from "react";
import { Risk } from "./Images";

const styles = {
      trip: {
        backgroundColor: 'white',
        margin: 'auto',
        padding: 3,
        borderBottom: '1px solid #ccc',
        top: '16%',
        left: '5%',
        width: '60%',
        height: '5%',
        borderRadius: 19,
        color: '#7D69A2',
        
        textAlign: 'left',
        padding: "0px 0px 0px 30px",
        filter: 'drop-shadow(0px 3px 2px #707070)',
        fontFamily:'Gotham-Medium, Gotham',
        fontWeight: 700,
        fontSize: 30,
        position: 'absolute',
        gridTemplateColumns: "1fr 1fr"
        }
    };

const TripComp = ({text, date}) => {
    return (
        <div>
        <div style={styles.trip}>
            {text}
            {date}
            </div>
        
        </div>
        
            
    );
} 

export default TripComp;