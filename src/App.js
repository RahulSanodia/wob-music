import './App.css';
import MusicGroup from './components/MusicGroup';
import HeroLanding from './components/Landing/HeroLanding'
import Lore from './components/Lore'
import Team from './components/Team'
import FAQ from './components/FAQ'
import About from './components/About'
import PlayerFrame from "./components/PlayerFrame"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeroLanding />} />
        <Route path='faq' element={<FAQ />} />     
        <Route path='lore' element={<Lore />} />
        <Route path='team' element={<Team />} />
        <Route path='about' element={<About />} />
        <Route path='wobmusicgroup' element={<MusicGroup />} />
        <Route path='player' element={<PlayerFrame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
