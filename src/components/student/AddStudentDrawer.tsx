import Drawer from "@/shared/Drawer/Drawer";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { StudentPayloadType } from "./validator";
import ControlledInput from "@/shared/Input/ControlledInput";

type AddStudentDrawerProps = Pick<
  React.ComponentProps<typeof Drawer>,
  "actionText" | "open" | "onClose" | "loading"
> & {
  isEdit?: boolean;
  form: UseFormReturn<StudentPayloadType>;
  onAction(_values: StudentPayloadType): void;
};
function AddStudentDrawer(props: AddStudentDrawerProps) {
  const { open, onClose, isEdit, form, onAction } = props;
  const { control, handleSubmit } = form;

  return (
    <Drawer
      open={open}
      onClose={onClose}
      title={isEdit ? "Modify Student" : "Add Student"}
      isFooter
      onAction={handleSubmit(onAction)}
      actionText={isEdit ? "Edit" : "Add"}
    >
      <div className=" flex flex-col gap-5 ">
        <ControlledInput control={control} name="title" label="Title" />
        <ControlledInput control={control} name="firstname" label="First Name" />
        <ControlledInput control={control} name="surname" label="Surname" />
        <ControlledInput control={control} name="date" type="date" label="Date" />
        <ControlledInput control={control} name="nationId" label="National ID" />
        <ControlledInput control={control} name="teacherNo" label="Teacher Number" />
        <ControlledInput control={control} name="salary" isNumber label="Salary" />
      </div>
    </Drawer>
  );
}

export default AddStudentDrawer;
