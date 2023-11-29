import React, { useState } from "react";
import MapGL, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
} from "react-map-gl";

import CityPin from "./cityPin";
import CityInfo from "./cityInfo";

import CITIES from "./cities.json";

const MapComponent = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.785164,
    longitude: -100,
    zoom: 3.5,
    bearing: 0,
    pitch: 0,
  });
  const [popupInfo, setPopupInfo] = useState(null);

  const updateViewport = (newViewport) => {
    setViewport(newViewport);
  };

  const renderCityMarker = (city, index) => {
    return (
      <Marker
        key={`marker-${index}`}
        longitude={city.longitude}
        latitude={city.latitude}
      >
        <CityPin size={20} onClick={() => setPopupInfo(city)} />
      </Marker>
    );
  };

  const renderPopup = () => {
    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={() => setPopupInfo(null)}
        >
          <CityInfo info={popupInfo} />
        </Popup>
      )
    );
  };

  return (
    <MapGL
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={updateViewport}
      mapboxAccessToken="pk.eyJ1IjoiYXFhcnN0b2NrIiwiYSI6ImNsbjNzMnprejA3dzgyaXFvY2c3YTB5NTcifQ.3W7Td-qUN-SLxqsKWGAOsQ"
    >
      {CITIES.map(renderCityMarker)}

      {renderPopup()}

      <div className="fullscreen">
        <FullscreenControl />
      </div>
      <div className="nav">
        <NavigationControl />
      </div>
    </MapGL>
  );
};

export default MapComponent;
