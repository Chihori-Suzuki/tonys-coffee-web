import { Link as Scroll } from "react-scroll";
import { useMediaQuery } from "react-responsive";
// import { slide as BurgerMenu } from "react-burger-menu";
import { useState } from "react";


const Menu = () => (
  <>
    <Scroll to="bg-img img1" className="header-menu">
      Menu
    </Scroll>
    <Scroll to="bg-img img2" className="header-menu">
      About
    </Scroll>
    <Scroll to="bg-img img3" className="header-menu">
      Gallery
    </Scroll>
    <Scroll to="bg-img img4" className="header-menu">
      Contact
    </Scroll>
  </>
);

const Header = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1000px)" });
  const [open, setOpen] = useState(false);

  return (
    <nav className="header">
      <div className="header-contents">
        <h1 className="header-title">Tony's Coffee</h1>

        {isBigScreen ? (
          <>
            <Menu />
          </>
        ) : (
          <>
            <button className="hamburger-button" onClick={() => setOpen(!open)}>
              {open ? (
                <span className="hamburger-button-line open"></span>
              ) : (
                <span className="hamburger-button-line"></span>
              )}
            </button>
            {open ? (
              <div className="hamburgerMenu open">
                <Menu />
              </div>
            ) : (
              <div className="hamburgerMenu">
                <Menu />
              </div>
            )}
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
