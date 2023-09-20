"use client";

import AddStudentDrawer from "@/components/student/AddStudentDrawer";
import {
  StudentPayloadType,
  studentDefaultValues,
  studentResolver,
} from "@/components/student/validator";
import Button from "@/shared/Button/Button";
import React from "react";
import { useForm } from "react-hook-form";

const StudentListPage = () => {
  const [open, setOpen] = React.useState(false);
  const form = useForm<StudentPayloadType>({
    defaultValues: studentDefaultValues,
    resolver: studentResolver,
  });
  const { handleSubmit } = form;

  const onSubmit = (values: StudentPayloadType) => {};
  return (
    <React.Fragment>
      <div>
        <div className=" flex justify-between items-center">
          <h2 className=" text-xl font-poppin font-semibold">Let find you the student list </h2>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setOpen(true);
            }}
          >
            Add Student
          </Button>
        </div>
      </div>
      <AddStudentDrawer
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        form={form}
        onAction={onSubmit}
      />
    </React.Fragment>
  );
};

export default StudentListPage;
