import Image from "next/image";
import Logo from "@/public/images/Suds/LogoNoBg.png";

export default function Navbar() {
  return (
    <div className="navbar bg-blue-400">
      <div className="navbar-start relative">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="normal-case">Home</a>
            </li>
            <li>
              <a className="normal-case">About Us</a>
            </li>
            <li>
              <a className="normal-case">Contact Us</a>
            </li>
            <li>
              <a className="normal-case">Services</a>
            </li>
          </ul>
        </div>
        <div>
          <Image
            src={Logo}
            alt="Logo"
            width={85}
            height={"auto"}
            objectFit="contain"
          />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="normal-case text-xl">Home</a>
          </li>
          <li>
            <a className="normal-case text-xl">About Us</a>
          </li>
          <li>
            <a className="normal-case text-xl">Contact Us</a>
          </li>
          <li>
            <a className="normal-case text-xl">Services</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end relative"></div>
    </div>
    /*  <div className="navbar bg-gray-500 px-48">
      <div className="flex-1">
        <a className="btn btn-xs p-0 border-none">
          <Image
            src={Logo}
            alt="Logo"
            width={100}
            height={50}
          />
        </a>
      </div>
      <div className="flex-none ">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="normal-case text-xl">Home</a>
          </li>
          <li>
            <a className="normal-case text-xl">About Us</a>
          </li>
          <li>
            <a className="normal-case text-xl">Contact Us</a>
          </li>
          <li>
            <a className="normal-case text-xl">Services</a>
          </li>
        </ul>
      </div>
    </div> */
  );
}
