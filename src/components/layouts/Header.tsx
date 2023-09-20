import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { RiSettings3Line } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";

function Header() {
  return (
    <header className=" sticky top-0 bg-common-white items-center flex border-b border-b-gray-300 justify-between py-4 px-9 xlsm:px-4">
      <div className=" xlsm:flex hidden items-center">
        <FaChalkboardTeacher />
      </div>
      <div className=" font-poppin font-semibold text-xl">TcStuApp</div>
      <div className=" flex justify-end gap-4 items-center">
        <RiSettings3Line className="text-2xl hover:text-primary-main" />
        <IoIosNotifications className="text-2xl hover:text-primary-main" />
      </div>
    </header>
  );
}

export default Header;
