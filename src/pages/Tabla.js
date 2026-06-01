import { useState } from "react";
function Tabla() {
  const [numero, setNumero] = useState("");
  const [tabla, setTabla] = useState([]);
  const generar = () => {
    let resultados = [];
    for (let i = 1; i <= 13; i++) {
      resultados.push(`${numero} x ${i} = ${numero * i}`);
    }
    setTabla(resultados);
  };
  return (
    <div style={{
      background: "linear-gradient(160deg, #fdf6f0 0%, #f5e6d3 50%, #ede0d0 100%)",
      border: "1px solid #d4a97a",
      borderRadius: "20px",
      padding: "2rem",
      maxWidth: "400px",
      margin: "1rem auto"
    }}>
      <h2 style={{
        background: "linear-gradient(135deg, #8b5e3c, #c97c3a)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        fontWeight: "600",
        marginBottom: "1.5rem"
      }}>Tabla de Multiplicar</h2>

      <input
        type="number"
        placeholder="Ingresa un número"
        onChange={(e) => setNumero(e.target.value)}
        style={{
          width: "100%",
          padding: "10px 14px",
          borderRadius: "10px",
          border: "1px solid #d4a97a",
          background: "#fdf6f0",
          color: "#6b3f1f",
          fontSize: "15px",
          boxSizing: "border-box",
          marginBottom: "16px",
          outline: "none"
        }}
      />

      <button
        onClick={generar}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "10px",
          border: "none",
          background: "linear-gradient(135deg, #c97c3a, #a0622a)",
          color: "#fdf6f0",
          fontSize: "15px",
          fontWeight: "600",
          cursor: "pointer",
          marginBottom: "1rem"
        }}
      >
        Generar
      </button>

      {tabla.map((item, index) => (
        <div key={index} style={{
          background: index % 2 === 0
            ? "linear-gradient(135deg, #f5e6d3, #ede0d0)"
            : "linear-gradient(135deg, #fdf6f0, #f5e6d3)",
          border: "1px solid #e8c99a",
          borderRadius: "8px",
          padding: "8px 14px",
          marginBottom: "6px",
          color: "#6b3f1f",
          fontWeight: "500",
          fontSize: "15px"
        }}>
          {item}
        </div>
      ))}
    </div>
  );
}
export default Tabla;