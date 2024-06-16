import React, { useState } from "react";
import { HiLightningBolt } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="container mx-auto bg-gray-100  rounded-md  lg:py-0 py-4 ">
      {/* Desktop Nabar  */}
      <div className="flex justify-between items-center  px-4">
        {/* //Logo Section */}
        <div className="inline-flex items-center">
          <span className="lg:text-6xl text-4xl text-cyan-300">
            <HiLightningBolt />
          </span>
          <span className="lg:text-2xl text-xl   lg:font-extrabold text-cyan-300">Shopping</span>
        </div>
        {/* // nav Link section  */}
        <div className="">
          <ul className="lg:flex space-x-8 font-semibold hidden ">
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? " text-blue-500" : "")}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? " text-blue-500" : "")}
                to="/shop"
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? " text-blue-500" : "")}
                to="/cart"
              >
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
        {/* Login and signup button section */}
        <div className="my-3 lg:flex items-center space-x-4  ">
          <button className="btn-primary lg:flex hidden "><Link to='/login'>Login</Link>  </button>
          <div className="avatar md:pr-1">
            <div className="lg:w-16 lg:h-16 w-10 h-10 rounded-full ">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>


        {/* Mobile Navbar */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(true)}>
            <span className="text-2xl">
              <HiMenuAlt3 />
            </span>
          </button>
        </div>
        {isMenuOpen && (
          <div className="w-full absolute top-0 left-0  lg:hidden bg-white">
             {/* //Logo Section */}
            <div className=" flex items-center justify-between  p-4 ">
             
              <div className="inline-flex items-center">
                <span className="text-6xl text-cyan-300">
                  <HiLightningBolt />
                </span>
                <span className="text-2xl font-extrabold text-cyan-300">
                  Shopping
                </span>
              </div>
              
              <div>
                <button onClick={() => setIsMenuOpen(false)}>
                  <span className="text-2xl">
                  <HiOutlineX />
                  </span>
                </button>
              </div>
            </div>
            <nav>
              <ul className=" space-y-2 pl-8 ">
                 <li><Link to='/'>Home</Link></li>
                 <li><Link to='/shop'>Shop</Link></li>
                 <li><Link to='/cart'>Cart</Link></li>
                 <li><Link to='/login'>LogIn</Link></li>
              </ul>
            </nav>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
