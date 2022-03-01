import React, { useState } from 'react'
import Map from 'react-map-gl';


function MapArea() {

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 37.7577,
    longitude: -112.437,
    zoom: 11
  })
  return (
    <Map
    mapStyle={'mapbox://styles/akib007/cl07d3df3000l14mgzmokqmhm'}
    mapboxAccessToken={process.env.mapbox_key}
    {...viewport}
    onMove={evt => setViewport(evt.viewport)}
    >
    </Map>
  )
}

export default MapArea