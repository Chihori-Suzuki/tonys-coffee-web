import Foods from "./Foods";
import Hotdrinks from "./Hotdrinks";
import Otherdrinks from "./Otherdrinks";

function Menu() {
  return (
    <div className="menu-container">
      <Foods />
      <Hotdrinks />
      <Otherdrinks />
    </div>
  );
}

export default Menu;
