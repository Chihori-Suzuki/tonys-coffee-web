import { sandwiches } from "../data/sandwiches";

function Foods() {
  return (
    <div className="container">
      <div className="main-text-container">
        <h2 className="page-title">Menu</h2>
        <p className="sub-title">Sandwiches</p>
        <ul className="sandwich-list">
          {sandwiches.map((sandwich) => (
            <>
              <li className="body-text">
                {sandwich.name} {sandwich.price}
              </li>
              <li className="second-text">{sandwich.details}</li>{" "}
            </>
          ))}
        </ul>
      </div>
      <img
        className="menu-image"
        src="./pictures/MenuMain.jpg"
        width="490"
        height="790"
      />
    </div>
  );
}

export default Foods;
