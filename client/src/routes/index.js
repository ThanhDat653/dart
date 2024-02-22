import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import LoadingAnimation from "../animation/LoadingAnimation";
import HomeLayout from "../layouts/HomeLayout";
import { PATHS } from "../constants/path";
import LoginForm from "../screens/auth/components/LoginForm";
import RegisterForm from "../screens/auth/components/RegisterForm";

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
   children: [
      {
         path: PATHS.LOGIN,
         element: <LazyLoadingComponent Children={LoginForm} />,
      },
      {
         path: PATHS.REGISTER,
         element: <LazyLoadingComponent Children={RegisterForm} />,
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
         element: <Authentication />,
         children: [authenticationRoute],
      },
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
