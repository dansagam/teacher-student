"use client";

import AddStudentDrawer from "@/components/student/AddStudentDrawer";
import StudentCard, { StudentData } from "@/components/student/StudentCard";
import {
  StudentPayloadType,
  studentDefaultValues,
  studentResolver,
} from "@/components/student/validator";
import { studentMockList } from "@/mocks/student";
import Button from "@/shared/Button/Button";
import { getHours } from "date-fns";
import React from "react";
import { useForm } from "react-hook-form";
import { PiPlusFill } from "react-icons/pi";
import { v4 as uuidv4 } from "uuid";

const StudentListPage = () => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [selected, setSelected] = React.useState<
    ({ isEdit?: boolean; isRemove?: boolean } & Partial<StudentData>) | null
  >(null);
  const [mock, setMock] = React.useState(studentMockList);
  const form = useForm<StudentPayloadType>({
    defaultValues: studentDefaultValues,
    resolver: studentResolver,
  });
  const { reset } = form;

  const onSubmit = (values: StudentPayloadType) => {
    setLoading(true);
    if (selected?.isEdit) {
      const filtered = mock.filter((field) => field.id !== selected?.id);
      setTimeout(() => {
        setMock((prev) => [
          {
            date: values.date,
            firstname: values.firstname,
            id: selected?.id || "",
            lastname: values.surname,
            nationalId: values.nationalId,
            studentNo: values.studentNo,
          },
          ...filtered,
        ]);
        setLoading(false);
        setSelected(null);
      }, 3000);
    } else {
      setTimeout(() => {
        setMock((prev) => [
          {
            date: values.date,
            firstname: values.firstname,
            id: uuidv4(),
            lastname: values.surname,
            nationalId: values.nationalId,
            studentNo: values.studentNo,
          },
          ...prev,
        ]);
        setLoading(false);
        setOpen(false);
      }, 3000);
    }
  };

  const onRemove = (values: string) => {
    console.log({ values });
    setLoading(true);

    const filtered = mock.filter((field) => field.id !== values);
    setTimeout(() => {
      setMock(filtered);
      setLoading(false);
    }, 3000);
  };
  return (
    <React.Fragment>
      <div>
        <div className=" flex justify-between items-center">
          <h2 className=" text-xl font-poppin font-semibold">
            {" "}
            {getHours(new Date()) > 18
              ? "Good Evening"
              : getHours(new Date()) < 12
              ? "Good Morning"
              : "Good Afternoon"}{" "}
            , <span className=" text-primary-main">User</span>
          </h2>
          <Button
            variant="contained"
            color="primary"
            startArdornment={<PiPlusFill />}
            onClick={() => {
              setOpen(true);
            }}
          >
            Add Student
          </Button>
        </div>
        <div className=" py-10 px-12 bg-primary-main w-full shadow-lg rounded-md my-2">
          <h2 className=" font-poppin font-semibold text-xl ">
            The List of the student are great, Do you want to explore?
          </h2>
        </div>
        <div className=" rounded-md shadow-lg bg-common-white py-6 px-8">
          <h2>Student List</h2>
          <div className=" grid grid-cols-4 gap-3 md:grid-cols-2 xlsm:grid-cols-1 mdlg:grid-cols-3">
            {mock.map((field) => (
              <StudentCard
                onClick={(key, values) => {
                  if (key === "edit") {
                    setSelected({ ...values, isEdit: true });
                  } else {
                    onRemove(values.id);
                  }
                }}
                key={field.id}
                data={field}
              />
            ))}
          </div>
        </div>
      </div>
      <AddStudentDrawer
        open={open || Boolean(selected?.isEdit)}
        onClose={() => {
          setOpen(false);
          setSelected(null);
          reset();
        }}
        isEdit={selected?.isEdit}
        form={form}
        selected={selected}
        onAction={onSubmit}
        loading={loading}
      />
    </React.Fragment>
  );
};

export default StudentListPage;
