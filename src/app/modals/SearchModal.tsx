import React, { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'

interface ModalProps {
    isOpen: boolean,
    onClose: () => void,
}

const SearchModal = ({
    isOpen,
    onClose,
}: ModalProps) => {

  return (
    <Transition appear show={isOpen} as={Fragment}>
    <Dialog as="div" className="relative z-[9999]" onClose={onClose}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
      </Transition.Child>

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-90"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-300"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-90"
          >
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-sm backdrop-blur-sm bg-white/80 p-6 text-left align-middle transition-all">
              Search
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
  );
};

export default SearchModal;