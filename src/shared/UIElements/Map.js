import React, { useEffect, useRef } from "react";

import './Map.css'

function Map(props) {
    const mapRef = useRef();
    console.log(mapRef);

    const { center, zoom } = props;
    
    useEffect(() => {
        const map = new window.google.maps.Map(mapRef.current, {
          center,
          zoom
        });
        console.log(map);
        new window.google.maps.Marker({
          position: center,
          map: map
        });
    },[center, zoom])

    return <div
        ref={mapRef}
        className={`map ${props.className}`}
        style={props.style}
    >
        
    </div>
}


export default Map;