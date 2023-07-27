import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function ProductDetail({ product, isOpen, setIsOpen }) {
   //   let [isOpen, setIsOpen] = useState(true)
   function closeModal() {
      setIsOpen(false);
   }

   return (
      <>
         <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
               <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-100"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
               >
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
               </Transition.Child>

               <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                     <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-100"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                     >
                        <Dialog.Panel className="relative w-full max-w-3xl transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl">
                           <XMarkIcon className="h-7 w-7 z-10 p-0.5 duration-100 absolute top-3 right-3 hover:text-gray-600 cursor-pointer text-gray-400" onClick={closeModal}/>
                           <div className="grid grid-cols-5 gap-x-5">
                              <img src={`./assets/images/${product.img}`} alt={product.img} className="col-span-2"/>
                              <div className="col-span-3 relative">
                                 <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                 >
                                    {product.name}
                                 </Dialog.Title>
                                 <p className="mt-2 text-rose-700 text-lg">${product.price}</p>
                                 <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                       {product.desc}
                                    </p>
                                 </div>
                                 <div className="mt-4 bottom-0 absolute w-full">
                                    <button
                                       type="button"
                                       className="hover:duration-200 w-full inline-flex justify-center rounded-md border-2 border-red-700 bg-transparent lg:px-16 px-4 py-2 text-base font-medium text-rose-700 hover:text-white hover:bg-rose-800 focus:outline-none"
                                       onClick={closeModal}
                                    >
                                       Add to cart
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </Dialog.Panel>
                     </Transition.Child>
                  </div>
               </div>
            </Dialog>
         </Transition>
      </>
   );
}
