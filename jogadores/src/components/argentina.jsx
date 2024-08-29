import React, { useState, useEffect } from "react";
import Styles from "./argentina.module.css";

const Argentina = () => {
  const [jogadores, setJogadores] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/guilhermevon/jogadores-copa2022/main/jogadores/jsons/argentina.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setJogadores(data);
      })
      .catch((error) => {
        console.error("Erro ao buscar os jogadores:", error);
      });
  }, []);

  return (
    <>
      <div className={Styles.container}>
        <h5 className={Styles.title}>
          Jogadores Convocados da Seleção Argentina para a Copa 2022
        </h5>

        <table>
          <thead>
            <tr>
              <th>Jogador</th>
              <th>Posição</th>
              <th>Idade</th>
              <th>Imagem</th>
            </tr>
          </thead>
          <tbody>
            {jogadores.map((jogador) => (
              <tr key={jogador.id}>
                <td>{jogador.Jogador}</td>
                <td>{jogador.Posição}</td>
                <td>{jogador.idade}</td>
                <td>
                  <img src={jogador.imagem} alt={jogador.nome} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Argentina;
