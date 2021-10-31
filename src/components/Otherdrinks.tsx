import React from "react";
import { coldDrinks, brendedDrinks } from "../data/drinks";

function Otherdrinks() {
  return (
    <div className="main-text-container">
      <div className="table-container">
        <table className="coffee-list">
          <p className="sub-title">COLD Drinks</p>
          <tr>
            <th className="table-header">{"  "}</th>
            <th>16oz</th>
            <th>20oz</th>
          </tr>
          {coldDrinks.map((drink) => (
            <tr>
              <td className="drink-text">{drink.name}</td>
              <td className="drink-price-text">{drink.medium?.toFixed(2)}</td>
              <td className="drink-price-text">{drink.large?.toFixed(2)}</td>
            </tr>
          ))}
        </table>
        <table className="coffee-list">
          <p className="sub-title">BRENDED Drinks</p>
          <tr>
            <th className="table-header">{"  "}</th>
            <th>16oz</th>
            <th>20oz</th>
          </tr>
          <td className="drink-text">ALL BRENDED DRINKS</td>
          {brendedDrinks.map((drink) => (
            <tr>
              <td className="drink-text">{drink}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Otherdrinks;
