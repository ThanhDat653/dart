import { products } from "../../data/productData";
import { ProductItem } from "./ProductItem";

export default function ProductList() {
   return (
      <div className="bg-transparent">
         <div className="mx-auto lg:max-w-7xl">
            <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-3 xl:gap-x-5">
               {products.map((product) => (
                  <ProductItem
                     dataProduct={product}
                     key={product.id}
                  ></ProductItem>
               ))}
            </div>
         </div>
      </div>
   );
}

