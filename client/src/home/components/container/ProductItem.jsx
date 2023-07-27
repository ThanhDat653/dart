import React, { useState } from "react";
import ProductDetail from "./ProductDetail";

export const ProductItem = ({ dataProduct }) => {
   const { ...product } = dataProduct;
   const [openDetail, setOpenDetail] = useState(false);

   function handleSelectProduct(event) {
      setOpenDetail(!openDetail);
   }

   return (
      <>
         <div
            key={product.id}
            className="group relative shadow-lg hover:shadow-xl px-4 pb-5 rounded-sm transition-all cursor-pointer"
            onClick={handleSelectProduct}
         >
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-90">
               <img
                  src={`./assets/images/${product.img}`}
                  alt={product.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
               />
            </div>
            <div className="mt-4 flex flex-col justify-between items-start">
               <h3 className="text-base text-gray-800">
                  <a href={product.href}>
                     <span aria-hidden="true" className="absolute inset-0" />
                     {product.name}
                  </a>
               </h3>
               <p className="mt-1 text-lg font-medium text-grey-900">
                  ${product.price}
               </p>
            </div>
         </div>
         {openDetail && <ProductDetail product={product} isOpen={openDetail} setIsOpen={setOpenDetail}></ProductDetail>}
      </>
   );
};
