import React, { useContext } from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { Context } from "./../context";

export const Sidebar = () => {
  const history = useHistory();
  const { cards } = useContext(Context);
  const match = useRouteMatch();
  const baseUrl = match.url.slice(0, 6);

  const goToMainHandler = () => {
    history.push("/main");
  };

  return (
    <aside>
      <ul className="sidebar">
        {cards.map((card) => {
          return (
            <li key={card.id}>
              <Link to={`${baseUrl}/${card.id}`}>{card.name}</Link>
            </li>
          );
        })}
        <li>
          <button onClick={goToMainHandler}>Go To Main</button>
        </li>
      </ul>
    </aside>
  );
};
