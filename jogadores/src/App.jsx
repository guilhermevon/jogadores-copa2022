import "./App.css";
import React, { useState } from "react";
import Argentina from "./components/argentina";
import Brasil from "./components/brasil";
import Portugal from "./components/portugal";

function App() {
  const [selecao, setSelecao] = useState("");

  const handleSelecaoClick = (novaSelecao) => {
    setSelecao(novaSelecao);
  };

  // Função para renderizar o componente com base na seleção atual
  const renderizarSelecao = () => {
    switch (selecao) {
      case "Argentina":
        return <Argentina />;
      case "Portugal":
        return <Portugal />;
      case "Brasil":
        return <Brasil />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => handleSelecaoClick("Argentina")}>
          Seleção Argentina
        </button>
        <button onClick={() => handleSelecaoClick("Portugal")}>
          Seleção Portuguesa
        </button>
        <button onClick={() => handleSelecaoClick("Brasil")}>
          Seleção Brasileira
        </button>
      </div>
      <table></table>
      {selecao && renderizarSelecao()}
    </div>
  );
}

export default App;
