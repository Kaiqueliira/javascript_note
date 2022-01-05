import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./screens/home";

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />}/>
    </Routes>
  </BrowserRouter>
);
export default Rotas;
