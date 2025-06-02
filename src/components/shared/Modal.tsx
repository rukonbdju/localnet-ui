import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ReactNode } from 'react';
type ModalProps = {
    isOpen: boolean;
    title: string;
    footer: ReactNode
    body: ReactNode | string;

}
const Modal = ({ isOpen, title, footer, body }: ModalProps): ReactNode => {
    return (
        <Dialog open={isOpen} onClose={() => { }} className="relative z-50">
            <DialogBackdrop className="fixed inset-0 bg-black/30" />
            <div className="fixed inset-0 flex w-screen items-center justify-center">
                <DialogPanel className="min-w-3xs max-w-2xl w-full space-y-4 shadow  rounded bg-white p-2 m-2">
                    <div className='flex flex-row gap-4 justify-between'>
                        <DialogTitle className="font-bold">
                            {title}
                        </DialogTitle>
                        <button className='bg-gray-200 active:bg-gray-300 p-0.5 rounded'>
                            <XMarkIcon className='size-5' />
                        </button>
                    </div>
                    <Description as='div'>
                        {body}
                    </Description>
                    <div className="flex gap-4">
                        {footer}
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    )
}

export default Modal;