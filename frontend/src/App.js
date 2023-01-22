import './App.css';
import * as React from 'react';
import { Routes, Route } from "react-router-dom"
import InfoPage from './pages/InfoPage'
// import PlayButton from "./components/PlayButton"
import LandingPage from "./pages/LandingPage";
import BudgetPage from "./pages/BudgetPage";
import SuggestionPage from "./pages/SuggestionPage";

function App() {
  return (     
        <div >
        <Routes>
        <Route path="/" element={ <LandingPage /> } />
        <Route path="/suggestion" element={ <SuggestionPage/> } />
        <Route path="/info" element={ <InfoPage/> } />
        <Route path="/budget" element={ <BudgetPage/> } />
      </Routes>
      </div>
  );
}

export default App;