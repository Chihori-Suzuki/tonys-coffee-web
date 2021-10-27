import React from "react";
import { coldDrinks, brendedDrinks } from "../data/drinks";

function Otherdrinks() {
  return (
    <div>
      <div className="container">
        <div className="main-text-container">
          <p className="sub-title">Hot Drinks</p>
          <div className="table-container">
            <table className="coffee-list">
              <tr>
                <th className="table-header">{"  "}</th>
                <th>16oz</th>
                <th>20oz</th>
              </tr>
              {coldDrinks.map((drink) => (
                <tr>
                  <td className="drink-text">{drink.name}</td>
                  <td className="drink-price-text">
                    {drink.medium?.toFixed(2)}
                  </td>
                  <td className="drink-price-text">
                    {drink.large?.toFixed(2)}
                  </td>
                </tr>
              ))}
            </table>
            <table className="coffee-list">
              <tr>
                <th className="table-header">{"  "}</th>
                <th>16oz</th>
                <th>20oz</th>
              </tr>
              {brendedDrinks.map((drink) => (
                <tr>
                  <td className="drink-text">{drink}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Otherdrinks;
