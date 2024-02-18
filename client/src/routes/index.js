import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import LoadingAnimation from "../animation/LoadingAnimation";
import HomeLayout from "../layouts/HomeLayout";
import { PATHS } from "../constants/path";

// Hero Section
const HeroSection = lazy(() => import("../screens/landing/RootSection"));

// Authentication
const Authentication = lazy(() => import("../screens/auth/Authentication"));

// Shop
const Shop = lazy(() => import("../screens/shop/Shop"));

// Contact
const Contact = lazy(() => import("../screens/contact/Contact"));

// Cart
const Cart = lazy(() => import("../screens/cart/Cart"));

const LazyLoadingComponent = ({ Children }) => {
   return (
      <Suspense fallback={<LoadingAnimation />}>
         <Children />
      </Suspense>
   );
};
const heroSectionRoute = {
   path: PATHS.HOME.IDENTITY,
   element: <LazyLoadingComponent Children={HeroSection} />,
};

const authenticationRoute = {
   path: PATHS.AUTH.IDENTIFY,
   element: <LazyLoadingComponent Children={Authentication} />,
   children: [
      {
         path: PATHS.LOGIN.IDENTIFY,
         element: <LazyLoadingComponent Children={Authentication} />,
      },
   ],
};

const shopRoute = {
   path: PATHS.SHOP.IDENTITY,
   element: <LazyLoadingComponent Children={Shop} />,
};

export default function AllRoutes() {
   return useRoutes([
      {
         path: "/",
         element: <HomeLayout />,
         children: [heroSectionRoute],
      },
      {
         path: "/",
         element: <HomeLayout />,
         children: [shopRoute],
      },
   ]);
}
