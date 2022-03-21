import React, { useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';
import { useSelector, useDispatch } from 'react-redux';
import { searchActions } from '../store/search-slice';

function MapArea({ searchResults }) {
  const dispatch = useDispatch();
  const stateSelectLocation = useSelector(state => state.search.selectLocation);
  // Transform the search results object into the
  // latititude and longitude object

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });


  return (
    <Map
      mapStyle={'mapbox://styles/akib007/cl07d3df3000l14mgzmokqmhm'}
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onMove={(evt) => setViewport(evt.viewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              onClick={() => {
                dispatch(searchActions.setSelectLocation(result))
                console.log(result);
              }}
              role="img"
              aria-label="push-pin"
              className="cursor-pointer text-2xl animate-bounce"
            >
              📌
            </p>
          </Marker>
          {/* This is the popup if we click the marker */}
          {stateSelectLocation.long === result.long ? (
            <Popup
            // onclose function don't work it's a bug
            // onClose={() => {
            // console.log('closed')
            // console.log(selectLocation)
            // }}
              closeOnClick={true}
              closeOnMove
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
              {console.log(result.title)}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </Map>
  );
}

export default MapArea;
