import Drawer from "@/shared/Drawer/Drawer";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import ControlledInput from "@/shared/Input/ControlledInput";
import { TeacherPayloadType } from "./validator";

type AddTeacherDrawerProps = Pick<
  React.ComponentProps<typeof Drawer>,
  "open" | "onClose" | "loading"
> & {
  isEdit?: boolean;
  form: UseFormReturn<TeacherPayloadType>;
  onAction(_values: TeacherPayloadType): void;
};
function AddTeacherDrawer(props: AddTeacherDrawerProps) {
  const { open, onClose, isEdit, form, onAction } = props;
  const { control, handleSubmit } = form;

  return (
    <Drawer
      open={open}
      onClose={onClose}
      title={isEdit ? "Modify Teacher" : "Add Teacher"}
      isFooter
      onAction={handleSubmit(onAction)}
      actionText={isEdit ? "Edit" : "Add"}
    >
      <div className=" flex flex-col gap-5 ">
        <ControlledInput control={control} name="title" label="Title" />
        <ControlledInput control={control} name="firstname" label="First Name" />
        <ControlledInput control={control} name="surname" label="Surname" />
        <ControlledInput control={control} name="date" type="date" label="Date of Birth" />
        <ControlledInput control={control} name="nationId" label="National ID" />
        <ControlledInput control={control} name="teacherNo" label="Teacher Number" />
        <ControlledInput control={control} name="salary" isNumber label="Salary" />
      </div>
    </Drawer>
  );
}

export default AddTeacherDrawer;
