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
        width: '45%',
        height: '5%',
        borderRadius: 19,
        color: '#7D69A2',

        textAlign: 'center',
        filter: 'drop-shadow(0px 3px 2px #707070)',
        fontFamily:'Gotham-Medium, Gotham',
        fontWeight: 700,
        fontSize: 30,
        position: 'absolute',
        },
    };

const TripComp = ({text}) => {
    return (
        <div>
        <div style={styles.trip}>
           
            {text}
            
            </div>
        
        </div>
        
            
    );
} 

export default TripComp;