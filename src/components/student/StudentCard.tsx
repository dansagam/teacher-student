import IconButton from "@/shared/Button/IconButton";
import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import { BiEdit, BiIdCard, BiTrash } from "react-icons/bi";
import Dropdown from "@/shared/Menu/Dropdown";

export type StudentData = {
  id: string;
  firstname: string;
  lastname: string;
  nationalId: string;
  studentNo: string;
  date: Date;
};
type StudentCardProps = {
  data: StudentData;
  onClick(key: string, values: StudentData): void;
};
function StudentCard(props: StudentCardProps) {
  const { data, onClick } = props;
  const memuOption = [
    {
      label: (
        <button
          onClick={() => {
            onClick("edit", data);
          }}
          className=" flex justify-start gap-2 items-center"
        >
          <BiEdit className="text-blue-500" /> Edit
        </button>
      ),
      value: "",
      onClick() {},
    },
    {
      label: (
        <button
          onClick={() => {
            onClick("delete", data);
          }}
          className=" flex justify-start gap-2 items-center"
        >
          <BiTrash className="text-error-70" /> Delete
        </button>
      ),
      value: "",
      onClick() {},
    },
  ];
  return (
    <div className=" grid shadow-md relative py-3 px-3 min-h-[8rem] rounded-md">
      <div className=" grid grid-cols-[1fr_auto] gap-2">
        <h3 className=" font-poppin font-semibold">{data.firstname + " " + data.lastname}</h3>
        <Dropdown options={memuOption}>
          <CiMenuKebab className=" text-primary-main" />
        </Dropdown>
      </div>
      <div>
        <div className=" flex justify-start items-center gap-2">
          <BiIdCard className="text-2xl" />
          <h4>{data.nationalId}</h4>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;
