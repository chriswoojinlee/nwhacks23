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


// import Button from "./components/Button"
// import PlayButton from "./components/PlayButton"
import DatePicker from "./components/DatePicker"

function App() {
  return ( 
        
        <div style={style.background}>
            <Trip/>
            <Plane/>
            <Risk/>
            
            {/* <Background/> */}
            <DatePicker />
      <Searchbar placeholder={"Ending Destination"} />
      <Searchbar placeholder={"Starting Destination"} />
          {/* <Searchbar/> */}
      </div>
  );
}

export default App;
