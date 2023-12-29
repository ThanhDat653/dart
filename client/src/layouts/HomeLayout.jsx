import React, { Suspense, lazy } from "react";
import Header from "../components/header/Header";
import { Outlet, Route } from "react-router-dom";
import Footer from "../components/footer/Footer";
import LoadingAnimation from "../animation/LoadingAnimation";
import { PATHS } from "../constants/path";

const HeroSection = lazy(() => import("../screens/landing/RootSection"));
const Shop = lazy(() => import("../screens/shop/Shop"));
const HomeLayout = () => {
   // const LazyLoadingComponent = ({ children }) => {
   //    return (
   //       <Suspense fallback={<LoadingAnimation />}>
   //          <children />
   //       </Suspense>
   //    );
   // };

   return (
      <div>
         <Header />
         <Suspense fallback={<LoadingAnimation />}>
            <Outlet />
         </Suspense>
         <Footer />
      </div>
   );
};

export default HomeLayout;
