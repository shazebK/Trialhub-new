import React, { useState } from "react";
import Link from "next/link";
import LinkTo from "./LinkTo";
import NotifyIcon from "../icons/NotifyIcon";
import UsersIcon from "../icons/UsersIcon";
import BurgerIcon from '../icons/BurgerIcon';
import CloseIcon from '../icons/CloseIcon';

function Navbar() {
  const [display, setDisplay] = useState("hidden");

  function clickHandler() {
    if (display == "hidden") setDisplay("block");
    else setDisplay("hidden");
  }

  return (
    <div className="w-full h-14 border-b px-4 flex items-center justify-between bg-white">
      <Link href="/"><h1 className="font-semibold text-lg md:text-base">TRIALSHOPPY</h1></Link>

      <button
        onClick={clickHandler}
        type="button"
        className="flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden"
      >
      <BurgerIcon/>
      </button>

      <div className={`h-screen w-3/5 p-4 bg-orange-300 fixed top-0 right-0 items-center justify-between ${display} md:h-full md:flex md:static md:w-1/2 md:bg-white`}>
       <div className="md:hidden" onClick={clickHandler}><CloseIcon/></div>
        <LinkTo linkTo="employee" />
        <LinkTo linkTo="attendence" />
        <LinkTo linkTo="tasks" />
        <LinkTo linkTo="meeting" />
        <LinkTo linkTo="leave" />
       </div>

       <div className="flex flex-row">
       <Link
          href="/login"
          className="text-[#202020] border-2 border-[#202020] rounded-full  px-6 py-1 mx-1 flex items-center"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="text-[#ffffff] bg-[#202020] border-2 border-[#202020] rounded-full  px-6 py-1 mx-1 flex items-center"
        >
          Signup
        </Link>
        </div>

      {/* <div className="w-20 justify-between hidden md:flex">
        <Link href="/"><NotifyIcon /></Link>
        <Link href="/"><UsersIcon /> </Link>
      </div> */}
    </div>
  );
}

export default Navbar;