
import './App.css';
import Header from './components/header/header';
import Container from './components/Container';
import Home from "./pages/Homescreen"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Pokemon from './pages/Pokemon.screen';
function App() {
  return (
    <BrowserRouter>
    <div>
<Header />
</div>
<Container>
  <Routes>
  <Route  path="/" element={<Home/>} />
  <Route  path="/pokemon/:pokemonName" element={<Pokemon/>} />
  </Routes>
</Container>
    </BrowserRouter>
  );
}

export default App;
