"use client";
import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import { BiEdit, BiIdCard, BiTrash } from "react-icons/bi";
import Dropdown from "@/shared/Menu/Dropdown";
import { formatCurrency } from "@/utils/formatCurrency";
import { PiChalkboardTeacher, PiMoney } from "react-icons/pi";

export type TeacherData = {
  id: string;
  firstname: string;
  lastname: string;
  nationalId: string;
  teacherNo: string;
  date: Date;
  salary?: number;
  title: string;
};
type TeacherCardProps = {
  data: TeacherData;
  onClick(key: string, values: TeacherData): void;
};
function TeacherCard(props: TeacherCardProps) {
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
        <h3 className=" font-poppin font-semibold">
          {data.title + " " + data.firstname + " " + data.lastname}
        </h3>
        <Dropdown options={memuOption}>
          <CiMenuKebab className=" text-primary-main" />
        </Dropdown>
      </div>
      <div className=" grid grid-rows-4 gap-3 mt-2">
        <div className=" flex justify-start items-center gap-2">
          <BiIdCard className="text-2xl" />
          <h4 className=" font-poppin">{data.nationalId}</h4>
        </div>
        <div className=" flex justify-start items-center gap-2">
          <PiChalkboardTeacher className="text-2xl" />
          <h4 className=" font-poppin">{data.teacherNo}</h4>
        </div>
        <div className=" flex justify-start items-center gap-2">
          <PiMoney className="text-2xl text-primary-main" />
          <h4 className=" font-poppin">{formatCurrency(data?.salary || 0)}</h4>
        </div>
      </div>
    </div>
  );
}

export default TeacherCard;
