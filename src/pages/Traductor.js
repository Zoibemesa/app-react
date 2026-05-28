import { useState } from "react";

function Traductor() {

  const [numero, setNumero] = useState("");
  const [resultado, setResultado] = useState("");

  const convertir = () => {

    const n = parseInt(numero);

    const unidades = [
      "",
      "uno",
      "dos",
      "tres",
      "cuatro",
      "cinco",
      "seis",
      "siete",
      "ocho",
      "nueve"
    ];

    if (n >= 1 && n <= 9) {

      setResultado(unidades[n]);

    } else {

      setResultado("Número fuera del rango básico");
    }
  };

  return (

    <div>

      <h2>Traductor</h2>

      <input
        type="number"
        onChange={(e) => setNumero(e.target.value)}
      />

      <br /><br />

      <button onClick={convertir}>
        Traducir
      </button>

      <h3>{resultado}</h3>

    </div>
  );
}

export default Traductor;
