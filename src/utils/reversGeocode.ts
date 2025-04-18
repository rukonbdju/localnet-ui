import { AddressInfo } from "@/types";

// Reverse geocode function using Nominatim API
export async function reverseGeocode(lat: number, lng: number): Promise<AddressInfo> {
    const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
    );
    const data = await res.json();
    console.log(data)
    return {
        address: data.display_name,
        city: data.address.city,
        state: data.address.state,
        district: data.address.state_district,
        village: data.address.village,
        postcode: data.address.postcode,
        country: data.address.country,
        countryCode: data.address.country_code,
        suburb: data.address.suburb,
    };
}