import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between relative">
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <img src="/logo.png" className="w-8 h-8" alt="logo" />
        <span>Blogify</span>
      </Link>
      {/* MOBILE MENU */}
      <div className="md:hidden flex items-center">
        {/* MOBILE BUTTON */}
        <div className="cursor-pointer text-2xl" onClick={() => setOpen(!open)}>
          {open ? "╳" : "☰"}
        </div>
        {/* MOBILE LINKED LIST */}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center absolute top-16 bg-[#e6e6ff] transition-all duration-300 ease-in-out ${
            open ? "right-0" : "-right-full"
          }`}
        >
          <Link to="/" className="text-lg py-2">
            Home
          </Link>
          <Link to="/" className="text-lg py-2">
            Trending
          </Link>
          <Link to="/" className="text-lg py-2">
            Most Popular
          </Link>
          <Link to="/" className="text-lg py-2">
            About
          </Link>
          <Link to="/" className="text-lg py-2">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login👋
            </button>
          </Link>
        </div>
      </div>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/" className="text-lg">
          Home
        </Link>
        <Link to="/" className="text-lg">
          Trending
        </Link>
        <Link to="/" className="text-lg">
          Most Popular
        </Link>
        <Link to="/" className="text-lg">
          About
        </Link>
      
        <SignedOut>
        <Link to="/login" className="text-lg">
          <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
            Login👋
          </button>
        </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
