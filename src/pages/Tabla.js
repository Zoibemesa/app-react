import { useState } from "react";

function Tabla() {

  const [numero, setNumero] = useState("");
  const [tabla, setTabla] = useState([]);

  const generar = () => {

    let resultados = [];

    for (let i = 1; i <= 13; i++) {

      resultados.push(
        `${numero} x ${i} = ${numero * i}`
      );
    }

    setTabla(resultados);
  };

  return (

    <div>

      <h2>Tabla de Multiplicar</h2>

      <input
        type="number"
        onChange={(e) => setNumero(e.target.value)}
      />

      <br /><br />

      <button onClick={generar}>
        Generar
      </button>

      {tabla.map((item, index) => (

        <p key={index}>
          {item}
        </p>

      ))}

    </div>
  );
}

export default Tabla;
