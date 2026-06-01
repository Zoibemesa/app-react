import { useState } from "react";
function Traductor() {
  const [numero, setNumero] = useState("");
  const [resultado, setResultado] = useState("");
  const convertir = () => {
    const n = parseInt(numero);
    const unidades = ["", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
    if (n >= 1 && n <= 9) {
      setResultado(unidades[n]);
    } else {
      setResultado("Número fuera del rango básico");
    }
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
      }}>Traductor</h2>

      <input
        type="number"
        placeholder="Ingresa un número (1-9)"
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
        onClick={convertir}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "10px",
          border: "none",
          background: "linear-gradient(135deg, #c97c3a, #a0622a)",
          color: "#fdf6f0",
          fontSize: "15px",
          fontWeight: "600",
          cursor: "pointer"
        }}
      >
        Traducir
      </button>

      {resultado && (
        <div style={{
          marginTop: "1.2rem",
          background: "linear-gradient(135deg, #f5e6d3, #e8c99a)",
          border: "1px solid #d4a97a",
          borderRadius: "12px",
          padding: "12px 16px",
          textAlign: "center"
        }}>
          <h3 style={{ color: "#6b3f1f", margin: 0, fontWeight: "600", textTransform: "capitalize" }}>
            {resultado}
          </h3>
        </div>
      )}
    </div>
  );
}
export default Traductor;