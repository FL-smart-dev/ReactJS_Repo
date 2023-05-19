import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import WecomePage from "./Pages/WecomePage/index.jsx"
import Meet from "./Pages/Meet/index.jsx"
import NotFound from "./Pages/NotFound/index.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WecomePage />} />
        <Route path="/meet" element={<Meet />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
