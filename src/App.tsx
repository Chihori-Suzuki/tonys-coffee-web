import "./styles/App.css";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import GoogleMapReact from "google-map-react";
import Header from "./components/Header";
import { sandwiches } from "./data/sandwiches";
import { hotDrinks1, hotDrinks2 } from "./data/drinks";
import { coldDrinks, brendedDrinks } from "./data/drinks";
import Image1 from "./image/background-1.jpg";
import Image2 from "./image/background-2.jpg";
import Image3 from "./image/background-3.jpg";
import Image4 from "./image/background-4.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

require("dotenv").config();

const About = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 890px)" });
  return (
    <>
      <div
        className="bg-img img1"
        style={{
          backgroundImage: `url(${Image1})`,
        }}
      ></div>
      <div className="container about">
        {isBigScreen && (
          <img
            className="about-image"
            src="./pictures/AboutMain.webp"
            width="380"
            height="670"
          />
        )}
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
};
const Foods = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 890px)" });
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
      {isBigScreen && (
        <img
          className="menu-image"
          src="./pictures/MenuMain.webp"
          width="380"
          height="670"
        />
      )}
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
          <td className="drink-price-text">4.76</td>
          <td className="drink-price-text">5.71</td>
          {brendedDrinks.map((drink) => (
            <tr>
              <td className="drink-text">
                <li>{drink}</li>
              </td>
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
        className="bg-img img2"
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
        className="bg-img img3"
        style={{
          backgroundImage: `url(${Image3})`,
        }}
      ></div>
      <div className="container-gallery-pics">
        <img
          src="./pictures/gallery/IMG_4440.webp"
          width="100%"
          height="auto"
        />
        <img
          src="./pictures/gallery/IMG_4445.webp"
          width="100%"
          height="auto"
        />
        <img
          src="./pictures/gallery/IMG_4452.webp"
          width="100%"
          height="auto"
        />
        <img
          src="./pictures/gallery/IMG_4457.webp"
          width="100%"
          height="auto"
        />
        <img
          src="./pictures/gallery/IMG_4482.webp"
          width="100%"
          height="auto"
        />
        <img
          src="./pictures/gallery/IMG_4485.webp"
          width="100%"
          height="auto"
        />
        <img
          src="./pictures/gallery/IMG_4487.webp"
          width="100%"
          height="auto"
        />
        <img
          src="./pictures/gallery/IMG_4489.webp"
          width="100%"
          height="auto"
        />
        <img
          src="./pictures/gallery/IMG_4541.webp"
          width="100%"
          height="auto"
        />
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

  const MyMarker = ({ text }: any) => {
    const iconStyle: React.CSSProperties = { fontSize: 36, color: "red" };
    return (
      <>
        <FontAwesomeIcon style={iconStyle} icon={faMapMarkerAlt} />
      </>
    );
  };

  // const apiKey = process.env.MAP_API_KEY as string;
  const apiKey = "AIzaSyD11qyipS5P95TznVTMv5yKMTaZz4WoyB0";
  const [mapProps, setMapProps] = useState<MapProps>(initialMapProps);
  return (
    <>
      <div
        className="bg-img img4"
        style={{
          backgroundImage: `url(${Image4})`,
        }}
      ></div>
      <div className="container contact">
        <div
          className="google-map"
          style={{ width: "350px", height: "350px", zIndex: 0 }}
        >
          <GoogleMapReact
            bootstrapURLKeys={{ key: apiKey }}
            center={mapProps.center}
            zoom={mapProps.zoom}
          >
            <MyMarker
              lat={mapProps.center.lat}
              lng={mapProps.center.lng}
              text="My Marker"
            />
          </GoogleMapReact>
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
