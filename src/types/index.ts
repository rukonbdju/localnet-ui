export * from './user';
export * from './error'
export type LatLng = { lat: number; lng: number };
export type AddressInfo = {
    address: string;
    city?: string;
    state?: string;
    district?: string;
    village?: string;
    postcode?: string;
    country?: string;
    countryCode?: string;
    suburb?: string;
};