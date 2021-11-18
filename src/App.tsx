import "./styles/App.css";
import { useState } from "react";
import GoogleMapReact from "google-map-react";
import Header from "./components/Header";
import { sandwiches } from "./data/sandwiches";
import { hotDrinks1, hotDrinks2 } from "./data/drinks";
import { coldDrinks, brendedDrinks } from "./data/drinks";
import Image1 from "./image/background-1.jpg";
import Image2 from "./image/background-2.jpg";
import Image3 from "./image/background-3.jpg";
import Image4 from "./image/background-4.jpg";

const About = () => (
  <>
    <div
      className="bg-img"
      style={{
        backgroundImage: `url(${Image1})`,
      }}
    ></div>
    <div className="container">
      <img
        className="about-image"
        src="./pictures/AboutMain.png"
        width="380"
        height="670"
      />
      <div className="main-text-container">
        <h2 className="page-title">About</h2>
        <h1 className="logo-title">Tony's Coffee</h1>
        <p className="body-text">Coffee Shop in Vancouver</p>
        <p className="sub-title">We're still here at Broadway!</p>
        <ul className="body-list">
          <li className="body-text">Call for pick up</li>
          <li className="body-text">Drop by for take away</li>
          <li className="body-text">Available for Eat-In & Free Wi-Fi</li>
          <li className="body-text">Breakfast, Lunch, or Coffee break</li>
        </ul>
        <div className="open-hour-texts">
          <p className="sub-title">Open</p>
          <p className="body-text">Monday - Friday</p>
          <p className="body-text">7:00 am - 3:30 pm</p>
        </div>
      </div>
    </div>
  </>
);
const Foods = () => {
  return (
    <div className="food-container">
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
        width="380"
        height="670"
      />
    </div>
  );
};
const Hotdrinks = () => {
  return (
    <div className="main-text-container">
      <p className="sub-title">HOT Drinks</p>
      <div className="table-container">
        <table className="coffee-list">
          <tr>
            <th className="table-header">{"  "}</th>
            <th className="drink-size">12oz</th>
            <th className="drink-size">16oz</th>
            <th className="drink-size">20oz</th>
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
        <table className="coffee-list">
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
  );
};
const Otherdrinks = () => {
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
};
const Menu = () => {
  return (
    <>
      <div
        className="bg-img"
        style={{
          backgroundImage: `url(${Image2})`,
        }}
      ></div>
      <div className="menu-container">
        <Foods />
        <Hotdrinks />
        <Otherdrinks />
      </div>
    </>
  );
};
const Gallery = () => {
  return (
    <>
      <div
        className="bg-img"
        style={{
          backgroundImage: `url(${Image3})`,
        }}
      ></div>
      <div className="gallery-pics">
        <img src="./pictures/gallery/IMG_4440.jpg" width="100%" height="100%" />
        <img src="./pictures/gallery/IMG_4445.jpg" width="100%" height="100%" />
        <img src="./pictures/gallery/IMG_4452.jpg" width="100%" height="100%" />
        <img src="./pictures/gallery/IMG_4457.jpg" width="100%" height="100%" />
        <img src="./pictures/gallery/IMG_4482.jpg" width="100%" height="100%" />
        <img src="./pictures/gallery/IMG_4485.jpg" width="100%" height="100%" />
        <img src="./pictures/gallery/IMG_4487.jpg" width="100%" height="100%" />
        <img src="./pictures/gallery/IMG_4489.jpg" width="100%" height="100%" />
        <img src="./pictures/gallery/IMG_4541.jpg" width="100%" height="100%" />
      </div>
    </>
  );
};
const Contact = () => {
  interface MapProps {
    center: {
      lat: number;
      lng: number;
    };
    zoom: number;
  }
  const initialMapProps: MapProps = {
    center: {
      lat: 49.26387900523431,
      lng: -123.12220859868819,
    },
    zoom: 18,
  };
  const apiKey = process.env.MAP_API_KEY as string;
  const [mapProps, setMapProps] = useState<MapProps>(initialMapProps);
  return (
    <>
      <div
        className="bg-img"
        style={{
          backgroundImage: `url(${Image4})`,
        }}
      ></div>
      <div className="container">
        <div className="google-map" style={{ width: "30vw", height: "50vh" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: apiKey }}
            center={mapProps.center}
            zoom={mapProps.zoom}
          />
        </div>
         
        <div className="main-text-container">
          <h2 className="page-title">Contact</h2>
          <p className="sub-title">Address</p>
          <div className="open-hour-texts">
            <p className="contact-text">
              805 W Broadway, <br />
              Vancouver, BC V5Z 1K1 <br />
              <br />
              TEL 604-871-0007
              <br />
              Monday to Friday 7:00 am - 3:30 pm
            </p>
            {/* <p className="body-text">Vancouver, BC V5Z 1K1 </p>
            <p className="body-text">TEL 604-871-0007</p>
            <p className="body-text">Monday to Friday 7:00 am - 3:30 pm</p> */}
          </div>
        </div>
      </div>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Menu />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
