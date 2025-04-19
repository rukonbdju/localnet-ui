'use client';

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
    geolocation: LatLng;
    setGeolocation: (coords: LatLng) => void;
    setLocation: (address: AddressInfo | null) => void;
};


// ✅ Map click event handler to capture coordinates
function LocationSelector({ onSelect }: { onSelect: (coords: LatLng) => void }) {
    console.log(useMapEvents)
    useMapEvents({
        click(e) {
            onSelect({ lat: e.latlng.lat, lng: e.latlng.lng });
        },
    });
    return null;
}

// ✅ Main component
function SelectLocation({ geolocation, setGeolocation, setLocation }: SelectLocationProps) {
    const handleSelect = async ({ lat, lng }: LatLng) => {
        setGeolocation({ lat, lng });
        // Reverse geocode the coordinates to get the address
        const addr = await reverseGeocode(lat, lng);
        setLocation(addr);
    };


    return (
        <div className="space-y-3">
            <div>
                <div className="h-[250px] sm:h-[400px]  w-full rounded-xl overflow-hidden shadow">
                    <MapContainer center={[geolocation.lat, geolocation.lng]} zoom={12} style={{ height: '100%', width: '100%' }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <LocationSelector onSelect={handleSelect} />
                        <Marker position={geolocation} />
                    </MapContainer>
                </div>
            </div>
        </div>
    );
}

export default SelectLocation;
