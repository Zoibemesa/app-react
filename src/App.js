import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Sumadora from "./pages/Sumadora";
import Traductor from "./pages/Traductor";
import Tabla from "./pages/Tabla";
import Experiencia from "./pages/Experiencia";

function NavLink({ to, children }) {
  const location = useLocation();
  const active = location.pathname === to;
  return (
    <Link
      to={to}
      style={{
        padding: "8px 18px",
        borderRadius: "999px",
        textDecoration: "none",
        fontWeight: "500",
        fontSize: "14px",
        background: active
          ? "linear-gradient(135deg, #c97c3a, #8b5e3c)"
          : "rgba(253,246,240,0.6)",
        color: active ? "#fdf6f0" : "#8b5e3c",
        border: active ? "none" : "1px solid #d4a97a",
        backdropFilter: "blur(4px)",
        transition: "all 0.2s"
      }}
    >
      {children}
    </Link>
  );
}

function Layout() {
  return (
    <div style={{
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif",
      position: "relative",
      overflow: "hidden"
    }}>

      
      <style>{`
        @keyframes gradientMove {
          0%   { background-position: 0% 50%; }
          25%  { background-position: 50% 0%; }
          50%  { background-position: 100% 50%; }
          75%  { background-position: 50% 100%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes floatA {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33%       { transform: translate(40px, -60px) scale(1.1); }
          66%       { transform: translate(-30px, 40px) scale(0.95); }
        }
        @keyframes floatB {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33%       { transform: translate(-50px, 30px) scale(1.05); }
          66%       { transform: translate(40px, -40px) scale(1.1); }
        }
        @keyframes floatC {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50%       { transform: translate(30px, 50px) scale(1.08); }
        }
        @keyframes floatD {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          40%       { transform: translate(-40px, -30px) scale(0.92); }
          80%       { transform: translate(20px, 40px) scale(1.06); }
        }
      `}</style>

      
      <div style={{
        position: "fixed", inset: 0, zIndex: 0,
        background: "linear-gradient(135deg, #3b1f0a, #6b3a1f, #a0622a, #c97c3a, #e8b87a, #8b5e3c, #3b1f0a)",
        backgroundSize: "400% 400%",
        animation: "gradientMove 12s ease infinite"
      }} />

      
      <div style={{
        position: "fixed", top: "-100px", left: "-100px",
        width: "500px", height: "500px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(232,184,122,0.45) 0%, transparent 65%)",
        animation: "floatA 10s ease-in-out infinite",
        zIndex: 0, pointerEvents: "none"
      }} />
      <div style={{
        position: "fixed", top: "20%", right: "-120px",
        width: "420px", height: "420px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,31,10,0.55) 0%, transparent 65%)",
        animation: "floatB 14s ease-in-out infinite",
        zIndex: 0, pointerEvents: "none"
      }} />
      <div style={{
        position: "fixed", bottom: "-80px", left: "25%",
        width: "380px", height: "380px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(201,124,58,0.4) 0%, transparent 65%)",
        animation: "floatC 11s ease-in-out infinite",
        zIndex: 0, pointerEvents: "none"
      }} />
      <div style={{
        position: "fixed", bottom: "15%", right: "5%",
        width: "280px", height: "280px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(245,217,176,0.3) 0%, transparent 65%)",
        animation: "floatD 9s ease-in-out infinite",
        zIndex: 0, pointerEvents: "none"
      }} />

      
      <div style={{
        position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle, rgba(245,217,176,0.07) 1px, transparent 1px)",
        backgroundSize: "28px 28px"
      }} />

      
      <div style={{
        position: "relative", zIndex: 1,
        maxWidth: "700px",
        margin: "0 auto",
        padding: "2rem"
      }}>

        
        <div style={{
          background: "rgba(59,31,10,0.55)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(232,184,122,0.25)",
          borderRadius: "20px",
          padding: "1rem 1.5rem",
          marginBottom: "1.8rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px"
        }}>
          <h1 style={{
            background: "linear-gradient(135deg, #f5d9b0, #e8b87a)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontWeight: "700",
            fontSize: "18px",
            margin: 0,
            letterSpacing: "-0.3px"
          }}>
            Aplicacion Tarea #3
          </h1>

          <nav style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/sumadora">Sumadora</NavLink>
            <NavLink to="/traductor">Traductor</NavLink>
            <NavLink to="/tabla">Tabla</NavLink>
            <NavLink to="/experiencia">Experiencia</NavLink>
          </nav>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sumadora" element={<Sumadora />} />
          <Route path="/traductor" element={<Traductor />} />
          <Route path="/tabla" element={<Tabla />} />
          <Route path="/experiencia" element={<Experiencia />} />
        </Routes>

      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
export default App;