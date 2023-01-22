import './App.css';
import Searchbar from "./components/Searchbar";
import Background from './components/Background';
import bgImage from "./components/img/bgImage.png";
import {Risk, Trip, Plane} from './components/Images';

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
            <Plane/>
            <Risk/>
            
            {/* <Background/> */}
          
          {/* <Searchbar/> */}
      </div>
    
  );
}

export default App;
