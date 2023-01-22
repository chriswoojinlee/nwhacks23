import './App.css';
import Searchbar from "./components/Searchbar";
import Background from './components/Background';
import bgImage from "./components/img/bgImage.png";
import {Risk, Trip, Plane, RiskTitle} from './components/Images';

const style = {
  background: {backgroundImage: `url(${bgImage})`,
    backgroundRepeat: 'no-repeat',
    width: window.innerWidth,
    height: window.innerHeight
    
  },

}

function App() {
  console.log(window.innerHeight);
  console.log(window.innerWidth);
  return ( 
        
        <div style={style.background}
        >
          <Trip style={style.trip}>
            </Trip>
          <Risk/>
          
          <Plane/>
          <RiskTitle/>
          {/* <Searchbar/> */}
      </div>
    
  );
}

export default App;
