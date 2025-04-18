'use client';

import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import { reverseGeocode } from '@/utils/reversGeocode';

import { AddressInfo } from '@/types';
import { LatLng } from '@/types';

// Fix Leaflet icons for Next.js (important for proper rendering)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: '/marker-icon-2x.png',
    iconUrl: '/marker-icon.png',
    shadowUrl: '/marker-shadow.png',
});

type SelectLocationProps = {
    position: LatLng;
    setPosition: (coords: LatLng) => void;
    mapCenter: LatLng;
    setMapCenter: (coords: LatLng) => void;
    address: AddressInfo | null;
    setAddress: (address: AddressInfo | null) => void;
};


// ✅ Map click event handler to capture coordinates
function LocationSelector({ onSelect }: { onSelect: (coords: LatLng) => void }) {
    useMapEvents({
        click(e) {
            onSelect({ lat: e.latlng.lat, lng: e.latlng.lng });
        },
    });
    return null;
}

// ✅ Main component
function SelectLocationMap({ position, setPosition, mapCenter, setMapCenter, setAddress }: SelectLocationProps) {
    const handleSelect = async ({ lat, lng }: LatLng) => {
        setPosition({ lat, lng });
        // Reverse geocode the coordinates to get the address
        const addr = await reverseGeocode(lat, lng);
        setAddress(addr);
        setMapCenter({ lat, lng });

    };
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            console.log('loading position...');
            const { latitude, longitude } = position.coords;
            setMapCenter({ lat: latitude, lng: longitude });
            setPosition({ lat: latitude, lng: longitude });
            // Reverse geocode the coordinates to get the address
            const addr = await reverseGeocode(latitude, longitude);
            setAddress(addr);
        }, (error) => {
            console.warn('Error getting location:', error.message);
            setAddress(null);
        })
    }, [setAddress, setMapCenter, setPosition]);

    return (
        <div className="space-y-3">
            <div>
                <div className="h-[250px] sm:h-[400px]  w-full rounded-xl overflow-hidden shadow">
                    <MapContainer center={[mapCenter.lat, mapCenter.lng]} zoom={12} style={{ height: '100%', width: '100%' }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <LocationSelector onSelect={handleSelect} />
                        <Marker position={position} />
                    </MapContainer>
                </div>
            </div>
        </div>
    );
}

export default SelectLocationMap;
