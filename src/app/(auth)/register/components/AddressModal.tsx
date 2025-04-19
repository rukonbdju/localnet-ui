import { LatLng, AddressInfo, } from '@/types';
import { reverseGeocode } from '@/utils/reversGeocode';
import { Dialog, DialogBackdrop, DialogPanel, } from '@headlessui/react'
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const SelectLocation = dynamic(() => import('@/components/geolocation/SelectLocation'), {
    ssr: false,
});

type AddressModalProps = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    geolocation: LatLng;
    setGeolocation: (coords: LatLng) => void;
    location: AddressInfo | null;
    setLocation: (address: AddressInfo | null) => void;
}

const AddressModal = ({ isOpen, setIsOpen, geolocation, setGeolocation, location, setLocation }: AddressModalProps) => {

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                console.log(position)
                setGeolocation({ lat: position.coords.latitude, lng: position.coords.longitude })
                const data = await reverseGeocode(position.coords.latitude, position.coords.longitude)
                setLocation(data)
            },
            (error) => {
                console.log(error)
            }
        )
    }, [setGeolocation, setLocation])

    return (
        <Dialog open={isOpen} onClose={() => { }} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="content-center sm:flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                    >
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            {location?.address && <p className='border border-gray-400 p-2 rounded-2xl mb-2'>{location?.address}</p>}
                            <p className='text-sm'>Find your location and select</p>
                            <SelectLocation geolocation={geolocation} setGeolocation={setGeolocation} setLocation={setLocation} />
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                                disabled={!location?.address}
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 sm:ml-3 sm:w-auto disabled:bg-blue-300"
                            >
                                Continue
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}

export default AddressModal;