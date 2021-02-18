import React, { useContext } from "react";
import { Sidebar } from "../components/Sidebar";
import { Context } from "./../context";
import { useParams } from "react-router-dom";

export const CardsPage = () => {
  const { cards } = useContext(Context);
  const { id } = useParams();

  const displayedCard = cards.filter((card) => card.id === +id);

  return (
    <div className="cards">
      <Sidebar />
      {!id && (
        <div className="cards_container">
          <h2> ================= Cards Page ================= </h2>
        </div>
      )}
      {id && (
        <div className="cards_container">
          <ul>
            <li>
              <b>Name: </b>
              {displayedCard[0].name}
            </li>
            <li>
              <b>Id: </b>
              {displayedCard[0].id}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
