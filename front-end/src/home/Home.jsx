export default function Home() {
   return (
      <div className="container mx-auto">
         <ul className="flex flex-row justify-center items-center my-4 py-2 border-y border-gray-300">
            <li className="mx-8">
               <a href="/" className="header__navbar-item__link">
                  <span className="uppercase">home</span>
               </a>
            </li>
            <li className="mx-8">
               <a href="/container" className="header__navbar-item__link">
                  <span className="uppercase">shop</span>
               </a>
            </li>
            <li className="mx-8">
               <a href="/" className="header__navbar-item__link">
                  <span className="uppercase">sale</span>
               </a>
            </li>
            <li className="mx-8">
               <a href="/" className="header__navbar-item__link">
                  <span className="uppercase">contact</span>
               </a>
            </li>
            <li className="header__navbar-item header__navbar-item__admin">
               <a href="./admin.html" className="header__navbar-item__link">
                  <span className="uppercase">admin</span>
               </a>
            </li>
            <li className="mx-8" id="loginBtn">
               <a href="/" className="header__navbar-item__link">
                  <span className="uppercase">log in</span>
               </a>
            </li>
         </ul>
      </div>
   );
}
