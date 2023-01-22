import './App.css';

import bgImage from "./components/img/bgImage.png";
import {Risk, Trip, Plane, Clouds} from './components/Images';
import Searchbar from "./components/Searchbar";
import Background from './components/Background';

const style = {
  background: {backgroundImage: `url(${bgImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundsize:'cover',
    overflow: 'hidden',
    width: window.innerWidth,
    height: window.innerHeight
  },

}



function App() {
  return ( 
        
        <div style={style.background}>
            <Trip/>
            <Clouds></Clouds>
            <Plane/>
            <Risk/>
      </div>
  );
}

export default App;
