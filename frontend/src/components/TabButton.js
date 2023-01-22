/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/
 import PropTypes from 'prop-types';
 import Tab from './Tab';
 import React, { useState } from "react";
 import { Component } from 'react';

//  const styles = {
//   button: {
//       borderTopLeftRadius: 19,
//       borderBottomRightRadius: 19,
//       borderTopRightRadius: 19,
//       borderBottomLeftRadius: 19,
//       border: 'none',
//       fontFamily:'Gotham-Medium, Gotham',
//       fontSize: 30,
//       color: 'white',
//       fontWeight: 500,
//       width: 216,
//       height: 73,
//       marginLeft: 10
//     }
 
// };

// function TabButton({text}) {
//   const[active, setActive] = useState(false);
//   const[textActive, setActiveText] = useState(false);
//   const handleClick = () => {
//     setActive(!active);
//     setActiveText(!textActive);
//   };

//   return (
//     <button onClick={handleClick}  style={{
//       borderTopLeftRadius: 19,
//       borderBottomRightRadius: 19,
//       borderTopRightRadius: 19,
//       borderBottomLeftRadius: 19,
//       border: 'none',
//       fontFamily:'Gotham-Medium, Gotham',
//       fontSize: 30,
//       color: textActive ?  "#7D69A2":"white",
//       fontWeight: 500,
//       width: 216,
//       height: 73,
//       marginLeft: 10, 
//       backgroundColor: active ? "white": "#7D69A2" }}  type="button">{text}</button>
//   );
// }

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }

constructor(props) {
  super(props);

  this.state= {
    activeTab: this.props.children[0].props.label,
  };
}

onClickTab = (tab) => {
  this.setState({ activeTab: tab });
}

render (){
  const  {
    onClickTab, 
    props: {
      children,
    },
    state: {
      activeTab,
    }
  } = this;


return (
  <div className="tabs">
    <ol className='tablist' style={{fontFamily: 'Gotham-Medium, Gotham', fontWeight: 700}}>
    {children.map((child) => {
      const {label} = child.props;

      return (
        <Tab
          activeTab = {activeTab}
          key={label}
          label={label}
          onClick = {onClickTab}
          />
      );
    })}
    </ol> 
    <div className='tabcontent' style={{fontFamily: 'Gotham-Medium, Gotham', fontWeight: 500}}>
        {children.map((child)=> {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
       </div>
  </div>
);
    }
      }


 
 export default Tabs;
 
 