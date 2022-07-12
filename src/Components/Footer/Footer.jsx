import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid2">
          <div className="box  space-y-8">
              <div className=" w-44">
                <h1 className=" py-2 rounded-full bg-blue-300 text-center ">E-commerce</h1>
              </div>
  
            
            <div className="icon flex grid-row-2 space-x-8  px-4">
              <div className=" space-x-3  ">
                <i class="fa-brands fa-google-play  "></i>
                <span className=" text-xs ">Google Play</span>
              </div>
              <div className="space-x-3 ">
                <i className="fa-brands fa-app-store-ios "></i>
                <span className="text-xs">App Store</span>
              </div>
             
            </div>
            <div className=" mt-4  w-44">
        <h5 className=" py-2 rounded-full text-center text-sm font-bold mb-6 bg-pink-400 ">Stay connected</h5>
        <div className="flex px-7 ">
          <a href="" className="w-8 h-8 border-2 items-center border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-pink-500 hover:border-pink-500">
          <img src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png" alt="" className="h-5 pl-1"/>          </a>
          <a href="" className="w-8 h-8  border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400">
          <img src="https://img.icons8.com/ios-glyphs/30/ffffff/twitter--v1.png" alt="" className="h-5 pl-1"/>
          </a>
          <a href="" className="w-8 h-8  border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-violet-600 hover:border-violet-600">
          <img src="https://img.icons8.com/material-sharp/24/ffffff/facebook-new.png" alt="" className="h-5 pl-1"/>
          </a>
        </div>
      </div>
            
          </div>
       
   

          <div className="box">
            <h2 className="hover:text-yellow-400 hover:cursor-pointer">
              About Us
            </h2>
            <ul className=" text-sm hover:cursor-pointer">
              <li className="hover:cursor-pointer hover:text-cyan-400">
                Careers
              </li>
              <li className="hover:cursor-pointer hover:text-cyan-400">
                Our Stores
              </li>
              <li className="hover:cursor-pointer hover:text-cyan-400">
                Our Cares
              </li>
              <li className="hover:cursor-pointer hover:text-cyan-400">
                Terms & Conditions
              </li>
              <li className="hover:cursor-pointer hover:text-cyan-400">
                Privacy Policy
              </li>
            </ul>
          </div>
          <div className="box">
            <h2 className="hover:text-fuchsia-500 hover:cursor-pointer">
              Customer Care
            </h2>
            <ul className="text-sm ">
              <li className="hover:text-orange-400  hover:cursor-pointer">
                Help Center{" "}
              </li>
              <li className=" hover:text-orange-400 hover:cursor-pointer">
                How to Buy{" "}
              </li>
              <li className="hover:text-orange-400 hover:cursor-pointer">
                Track Your Order{" "}
              </li>
              <li className="hover:text-orange-400 hover:cursor-pointer">
                Corporate & Bulk Purchasing{" "}
              </li>
              <li className="hover:text-orange-400 hover:cursor-pointer">
                Returns & Refunds{" "}
              </li>
            </ul>
          </div>
          <div className="box">
            <h2 className="hover:text-teal-400 hover:cursor-pointer">
              Contact Us
            </h2>
            <ul className="text-sm ">
              <li className="hover:text-pink-400 hover:cursor-pointer">
              Apadana 7th St.
          Gorgan, Iran
              </li>
              <li className="hover:text-pink-400 hover:cursor-pointer">
                {" "}
                asamahdavi22@gmail.com
              </li>
              <li className="hover:text-pink-400 hover:cursor-pointer">
                +1 1123 456 780
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
