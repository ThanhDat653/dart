import React from "react";
import { NavLink } from "react-router-dom";
import ResetLocation from "../../animation/helpers/ResetLocation";

const Navbar = () => {
   return (
      <ul className="hidden flex-row justify-center items-center py-3 border-y border-b-0 border-gray-300 sm:flex">
         <li className="mx-8">
            <NavLink
               onClick={() => {
                  ResetLocation();
               }}
               to="/"
            >
               <span className="uppercase font-semibold text-lg text-gray-800 hover:text-red-800 transition-colors">
                  home
               </span>
            </NavLink>
         </li>
         <li className="mx-8">
            <NavLink
               onClick={() => {
                  ResetLocation();
               }}
               to="/shop"
            >
               <span className="uppercase font-semibold text-lg text-gray-800 hover:text-red-800 transition-colors">
                  shop
               </span>
            </NavLink>
         </li>
         <li className="mx-8">
            <NavLink
               onClick={() => {
                  ResetLocation();
               }}
               to="/contact"
            >
               <span className="uppercase font-semibold text-lg text-gray-800 hover:text-red-800 transition-colors">
                  contact
               </span>
            </NavLink>
         </li>
         <li className="mx-8">
            <NavLink
               onClick={() => {
                  ResetLocation();
               }}
               to="/about"
            >
               <span className="uppercase font-semibold text-lg text-gray-800 hover:text-red-800 transition-colors">
                  about
               </span>
            </NavLink>
         </li>
         <li className="mx-8">
            <NavLink
               onClick={() => {
                  ResetLocation();
               }}
               to="/shop:category-sale"
            >
               <span className="uppercase font-semibold text-lg text-gray-800 hover:text-red-800 transition-colors">
                  sales
               </span>
            </NavLink>
         </li>
      </ul>
   );
};

export default Navbar;
