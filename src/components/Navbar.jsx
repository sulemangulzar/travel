import React from "react";
import logo from "../assets/images/9391718.png";

const Navbar = () => {
  return (
    <>
      {/* mob menu  */}
      <div className="hidden mob-menu fixed z-10 w-full h-[500px]  border-2 border-b-black">
        <div className=""></div>
      </div>
      <div className="w-full h-16 flex items-center justify-between px-4 md:px-12">
        <div>
          <img src={logo} alt="Logo" className="w-10 h-10" />
        </div>
        <div className="md:hidden">
          <button>
            <svg
              className="w-6 h-6 text-black fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>
        </div>

        <div className="hidden md:flex text-black">
          <ul className=" flex items-center gap-6 text-base font-semibold tracking-wide font-custom">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Navbar;
