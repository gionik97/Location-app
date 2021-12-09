import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

function SearchResult() {
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const [data, setData] = useState({});
  const { searchQuery } = useSelector((state) => state.location);
  const ipApiKey = process.env.REACT_APP_IP_ADDRESS_API_KEY;

  useEffect(() => {
    const apiUrl = `http://api.ipstack.com/${searchQuery}?access_key=${ipApiKey}`;
    async function fetchData() {
      let response = await axios(apiUrl);
      let data = await response.data;
      setData(data);
      setLat(data.latitude);
      setLng(data.longitude);
    }
    fetchData();
  }, [searchQuery]);

  const mapContainerStyle = {
    width: "80%",
    height: "100%",
  };

  const center = {
    lat: lat,
    lng: lng,
  };

  const options = {
    disableDefaultUI: true,
    zoomControl: true,
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) {
    return "Error loading maps";
  }
  if (!isLoaded) {
    return "Loading maps";
  }

  return (
    <Box sx={{ display: "flex", m: 1, bgcolor: "background.paper" }}>
      <Box sx={{ height: "230px", width: "60%" }}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={8}
          center={center}
          options={options}
        >
          <Marker position={{ lat: lat, lng: lng }} />
        </GoogleMap>
      </Box>
      <Box>
        <Typography>Location Details</Typography>
        {Object.entries(data).length !== 0 && (
          <Box sx={{ height: "230px", width: "40%" }}>
            <Typography>{`City: ${data.city}`}</Typography>
            <Typography>{`Country: ${data.country_name}`}</Typography>
            <Typography>{`Latitude: ${data.latitude}`}</Typography>
            <Typography>{`Longitude: ${data.longitude}`}</Typography>
            <Typography>{`IP: ${data.ip}`}</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default SearchResult;
