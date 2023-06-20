import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Princesa } from './pages';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/princesa" element={<Princesa />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
