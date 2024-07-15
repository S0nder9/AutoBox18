import React from 'react';
import useLeafletMap from '../../../Hooks/useLeafletMap';

const Map = ({ center, zoom, height, width, text, imageUrl, imageBounds }) => {
    const markers = [
        {
            position: center,
            popup: text || ''
        }
    ];

    const LeafletMap = useLeafletMap(center, zoom, height, width, markers, imageUrl, imageBounds);

    return (
        <>
            {LeafletMap}
        </>
    );
}

export default Map;
