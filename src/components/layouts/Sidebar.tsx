import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";
import { BiBookAlt } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import SidebarLink from "./SidebarLink";

function Sidebar() {
  return (
    <aside className=" sticky top-0 h-screen bg-primary-main overflow-auto w-[18rem] md:w-[5rem] sm:hidden p-3 flex flex-col gap-5 ">
      <div className=" flex items-center justify-start gap-3">
        <FaChalkboardTeacher className="text-4xl " />
        <h2 className=" font-semibold text-2xl font-poppin md:hidden">TcStuApp</h2>
      </div>
      <div className="py-8 flex flex-1 flex-col gap-3">
        {sidebarData.map((fields, idx) => (
          <SidebarLink key={`${fields.label}-${idx}`} {...fields} />
        ))}
      </div>
    </aside>
  );
}

type SidebarDataType = Omit<React.ComponentProps<typeof SidebarLink>, "key">;

const sidebarData: SidebarDataType[] = [
  {
    icon: <RxDashboard />,
    label: "Dashboard",
    path: "/",
  },
  {
    icon: <GiTeacher />,
    label: "Teacher",
    path: "/teacher",
  },
  {
    icon: <PiStudentBold />,
    label: "Student",
    path: "/student",
  },
  {
    icon: <BiBookAlt />,
    label: "Course",
    path: "#",
  },
];
export default Sidebar;
