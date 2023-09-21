import Drawer from "@/shared/Drawer/Drawer";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import ControlledInput from "@/shared/Input/ControlledInput";
import { TeacherPayloadType, teacherDefaultValues } from "./validator";
import ControlledSelect from "@/shared/Select/ControlledSelect";
import { TeacherData } from "./TeacherCard";

type AddTeacherDrawerProps = Pick<
  React.ComponentProps<typeof Drawer>,
  "open" | "onClose" | "loading"
> & {
  isEdit?: boolean;
  form: UseFormReturn<TeacherPayloadType>;
  onAction(_values: TeacherPayloadType): void;
  selected?: (Partial<TeacherData> & { isEdit?: boolean; isRemove?: boolean }) | null;
};

const options = [
  {
    label: "Mr",
    value: "Mr",
  },
  {
    label: "Mrs",
    value: "Mrs",
  },
  {
    label: "Dr",
    value: "Dr",
  },
  {
    label: "Miss",
    value: "Miss",
  },
  {
    label: "Prof",
    value: "Prof",
  },
];
function AddTeacherDrawer(props: AddTeacherDrawerProps) {
  const { open, onClose, isEdit, form, onAction, selected } = props;
  const { control, handleSubmit, setValue } = form;

  React.useEffect(() => {
    if (open) {
      if (isEdit && selected) {
        const fields = Object.keys(teacherDefaultValues) as (keyof typeof teacherDefaultValues)[];
        fields.forEach((field) => {
          if (field === "date") {
            setValue("date", selected?.date || teacherDefaultValues[field]);
          } else if (field === "firstname") {
            setValue(field, selected?.[field] || teacherDefaultValues[field]);
          } else if (field === "surname") {
            setValue(field, selected?.lastname || teacherDefaultValues[field]);
          } else if (field === "nationalId") {
            setValue(field, selected?.[field] || teacherDefaultValues[field]);
          } else if (field === "salary") {
            setValue(field, selected?.[field] || teacherDefaultValues[field]);
          } else if (field === "title") {
            setValue(
              field,
              (selected?.[field] as TeacherPayloadType["title"]) || teacherDefaultValues[field]
            );
          } else {
            setValue(field, selected?.[field] || teacherDefaultValues[field]);
          }
        });
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, isEdit, selected]);

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
        <ControlledSelect control={control} name="title" label="Title" options={options} />
        <ControlledInput control={control} name="firstname" label="First Name" />
        <ControlledInput control={control} name="surname" label="Surname" />
        <ControlledInput control={control} name="date" type="date" label="Date of Birth" />
        <ControlledInput control={control} name="nationalId" label="National ID" />
        <ControlledInput control={control} name="teacherNo" label="Teacher Number" />
        <ControlledInput control={control} name="salary" isNumber label="Salary" />
      </div>
    </Drawer>
  );
}

export default AddTeacherDrawer;
