import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Sumadora from "./pages/Sumadora";
import Traductor from "./pages/Traductor";
import Tabla from "./pages/Tabla";
import Experiencia from "./pages/Experiencia";

function App() {

  return (

    <BrowserRouter>

      <div style={{
        padding: "20px",
        fontFamily: "Arial"
      }}>

        <h1>Mi Aplicación React</h1>

        <nav style={{ marginBottom: "20px" }}>

          <Link to="/">Inicio</Link> |{" "}
          <Link to="/sumadora">Sumadora</Link> |{" "}
          <Link to="/traductor">Traductor</Link> |{" "}
          <Link to="/tabla">Tabla</Link> |{" "}
          <Link to="/experiencia">Experiencia</Link>

        </nav>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/sumadora" element={<Sumadora />} />
          <Route path="/traductor" element={<Traductor />} />
          <Route path="/tabla" element={<Tabla />} />
          <Route path="/experiencia" element={<Experiencia />} />

        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;
