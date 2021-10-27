import { hotDrinks1, hotDrinks2 } from "../data/drinks";

function Hotdrinks() {
  return (
    <div className="container">
      <div className="main-text-container">
        <p className="sub-title">Hot Drinks</p>
        <div className="table-container">
          <table className="coffee-list" >
            <tr>
              <th className="table-header">{"  "}</th>
              <th>12oz</th>
              <th>16oz</th>
              <th>20oz</th>
            </tr>
            {hotDrinks1.map((drink) => (
              <tr>
                <td className="drink-text">{drink.name}</td>
                <td className="drink-price-text">{drink.small?.toFixed(2)}</td>
                <td className="drink-price-text">{drink.medium?.toFixed(2)}</td>
                <td className="drink-price-text">{drink.large?.toFixed(2)}</td>
              </tr>
            ))}
          </table>
          <table className="coffee-list" >
            <tr>
              <th>{"  "}</th>
              <th>12oz</th>
              <th>16oz</th>
              <th>20oz</th>
            </tr>
            {hotDrinks2.map((drink) => (
              <tr>
                <td className="drink-text">{drink.name}</td>
                <td className="drink-price-text">{drink.small?.toFixed(2)}</td>
                <td className="drink-price-text">{drink.medium?.toFixed(2)}</td>
                <td className="drink-price-text">{drink.large?.toFixed(2)}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Hotdrinks;
