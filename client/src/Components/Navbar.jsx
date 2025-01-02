import { useState } from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between relative overflow-hidden">
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <img src="/logo.png" className="w-8 h-8" alt="logo" />
        <span>lamalog</span>
      </Link>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        {/* MOBILE BUTTON */}
        <div
          className="cursor-pointer text-4xl z-50 fixed top-5 right-5"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <div className="text-4xl">✖</div> // Close button when menu is open
          ) : (
            <div className="flex flex-col gap-[5.4px]">
              <div className="h-[3px] rounded-md w-6 bg-black origin-left transition-all ease-in-out"></div>
              <div className="h-[3px] rounded-md w-6 bg-black transition-all ease-in-out"></div>
              <div className="h-[3px] rounded-md w-6 bg-black origin-left transition-all ease-in-out"></div>
            </div>
          )}
        </div>
        {/* MOBILE LINK LIST */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-[#e6e6ff] flex flex-col items-center justify-center gap-8 font-medium text-lg transition-transform ease-in-out duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/posts?sort=trending" onClick={() => setOpen(false)}>Trending</Link>
          <Link to="/posts?sort=popular" onClick={() => setOpen(false)}>Most Popular</Link>
          <Link to="/" onClick={() => setOpen(false)}>About</Link>
          <Link to="/login" onClick={() => setOpen(false)}>
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login 👋
            </button>
          </Link>
        </div>
      </div>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
        <Link to="/posts?sort=trending">Trending</Link>
        <Link to="/posts?sort=popular">Most Popular</Link>
        <Link to="/">About</Link>
        <SignedOut>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login 👋
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
