import { useState } from "react";

function Sumadora() {

  const [n1, setN1] = useState("");
  const [n2, setN2] = useState("");
  const [resultado, setResultado] = useState("");

  const sumar = () => {

    setResultado(Number(n1) + Number(n2));
  };

  return (

    <div>

      <h2>Sumadora</h2>

      <input
        type="number"
        placeholder="Número 1"
        onChange={(e) => setN1(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Número 2"
        onChange={(e) => setN2(e.target.value)}
      />

      <br /><br />

      <button onClick={sumar}>
        Sumar
      </button>

      <h3>
        Resultado: {resultado}
      </h3>

    </div>
  );
}

export default Sumadora;
