import './App.css';
import Searchbar from "./components/Searchbar";
import bgImage from "./components/img/bgImage.png";
import Button from "./components/Button"
// import PlayButton from "./components/PlayButton"
import DatePicker from "./components/DatePicker";
import LandingPage from "./pages/LandingPage";
import BudgetPage from "./pages/BudgetPage";
import SuggestionPage from "./pages/SuggestionPage";

const style = {
  background: {backgroundImage: `url(${bgImage})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  resizeMode: 'contain',
  width: window.outerWidth,
  height: window.outerHeight
  },

}

function App() {
  return ( 

      <div>
        <LandingPage /> 
      </div>
        
  );
}

export default App;