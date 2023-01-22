import React from "react";
import { Risk } from "./Images";

const styles = {
      risk: {
        backgroundColor: 'white',
        marginTop: 0,
        padding: '2%',
        borderBottom: '1px solid #ccc',
        top: '30%',
        left: '70%',
        width: '23%',
        minHeight: 300,
        borderRadius: 19,
        color: '#7D69A2',
        filter: 'drop-shadow(0px 5px 3px #707070)',
        fontFamily:'Gotham-Medium, Gotham',
        position: 'absolute',
        },
        title: {
            backgroundColor: 'white',
            marginTop: 0,
            padding: '1%',
            borderBottom: '1px solid #ccc',
            top: '24%',
            left: '70%',
            width: '10%',
            minHeight: 50,
            borderRadius: 19,
            color: '#7D69A2',
            fontFamily:'Gotham-Bold, Gotham',
            fontWeight: 700,
            filter: 'drop-shadow(0px 5px 3px #707070)',
            position: 'absolute',
            }
    };

const RiskComp = ({text}) => {
    return (
        <div>
        <div style={styles.title}> Risk Level</div>
        <div style={styles.risk}>
           
            {text}
            
            </div>
        
        </div>
        
            
    );
} 

export default RiskComp;