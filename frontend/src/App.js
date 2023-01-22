import './App.css';
import Searchbar from "./components/Searchbar";
// import Button from "./components/Button"
// import PlayButton from "./components/PlayButton"
import DatePicker from "./components/DatePicker"

function App() {
  return (
    <div>
      <DatePicker />
      <Searchbar placeholder={"Ending Destination"} />
      <Searchbar placeholder={"Starting Destination"} />
    </div>
  );
}

export default App;
