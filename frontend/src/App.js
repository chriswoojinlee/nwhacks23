import './App.css';
import * as React from 'react';
import bgImage from "./components/img/bgImage.png";
import {Risk, Trip, Plane} from './components/Images';
import Searchbar from "./components/Searchbar";
import Background from './components/Background';
import TabButton from './components/TabButton';
import FlightInfo from './components/FlightInfo';
import Tabs from './components/TabButton';

import InfoPage from './pages/InfoPage'
import RiskComp from './components/RiskComp';


function App() {
  return ( 
        <div >
        <InfoPage/>
       
      </div>
      
  );
}

export default App;
