import { Link as Scroll } from "react-scroll";
import { useMediaQuery } from "react-responsive";
// import { slide as BurgerMenu } from "react-burger-menu";
import { useState } from "react";

const Menu = () => (
  <>
    <Scroll
      to="menu-container"
      className="header-menu"
      smooth={true}
      duration={600}
    >
      Menu
    </Scroll>
    <Scroll
      to="container about"
      className="header-menu"
      smooth={true}
      duration={600}
    >
      About
    </Scroll>
    <Scroll
      to="gallery-pics"
      className="header-menu"
      smooth={true}
      duration={600}
    >
      Gallery
    </Scroll>
    <Scroll
      to="container contact"
      className="header-menu"
      smooth={true}
      duration={600}
    >
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
