import {
   createContext,
   useContext,
   useEffect,
   useReducer,
   useRef,
   useState,
   useCallback,
} from "react";
import {
   BrowserRouter,
   Route,
   Routes,
   useLocation,
   useParams,
} from "react-router-dom";
import RootSection from "./routes/landing/RootSection";
import Contact from "./routes/contact/Contact";
import Cart from "./routes/cart/Cart";
import CartModal from "./routes/cart/CartModal";
import Shop from "./routes/shop/Shop";
import Product from "./routes/product/Product";
import NotFound from "./routes/not-found/NotFound";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { useDispatch } from "react-redux";
import filtersSlide from "./redux/slices/filtersSlide";
import CartContextProvider from "./routes/cart/CartReducer";

export default function App() {
   const [openCartModal, setOpenCartModal] = useState(false);

   const handleCartModal = useCallback((e) => {
      if (e.target.closest("#cart")) {
         setOpenCartModal(!openCartModal);
      } else setOpenCartModal(false);
   }, []);

   return (
      <div onClick={handleCartModal} className="relative bg-gray-100">
         <BrowserRouter>
            <CartContextProvider>
               <Header openCartModal={openCartModal}>
                  <CartModal closeModal={handleCartModal} />
               </Header>
               <Routers></Routers>
            </CartContextProvider>
            <Footer></Footer>
         </BrowserRouter>
      </div>
   );
}

function Routers() {
   const dispatch = useDispatch();
   const location = useLocation();
   

   function clearAllFilters() {
      dispatch(filtersSlide.actions.colorFilterChange([]));
      dispatch(filtersSlide.actions.sizeFilterChange([]));
      dispatch(filtersSlide.actions.categoryFilterChange([]));
   }

   useEffect(() => {
      clearAllFilters();
   }, [location]);

   return (
      <Routes>
         <Route path="/" element={<RootSection />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/cart" element={<Cart />} />
         <Route path="/shop" element={<Shop />}>
            <Route path="detail/productId" element={<Product />} />
         </Route>
         <Route path="*" element={<NotFound />} />
      </Routes>
   );
}
