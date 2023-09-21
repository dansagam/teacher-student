import Drawer from "@/shared/Drawer/Drawer";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { StudentPayloadType, studentDefaultValues } from "./validator";
import ControlledInput from "@/shared/Input/ControlledInput";
import { StudentData } from "./StudentCard";

type AddStudentDrawerProps = Pick<
  React.ComponentProps<typeof Drawer>,
  "actionText" | "open" | "onClose" | "loading"
> & {
  isEdit?: boolean;
  form: UseFormReturn<StudentPayloadType>;
  onAction(_values: StudentPayloadType): void;
  selected?: (Partial<StudentData> & { isEdit?: boolean; isRemove?: boolean }) | null;
};
function AddStudentDrawer(props: AddStudentDrawerProps) {
  const { open, onClose, isEdit, form, onAction, selected } = props;
  const { control, handleSubmit, setValue } = form;

  React.useEffect(() => {
    if (open) {
      if (isEdit && selected) {
        const fields = Object.keys(studentDefaultValues) as (keyof typeof studentDefaultValues)[];
        fields.forEach((field) => {
          if (field === "date") {
            setValue("date", selected?.date || studentDefaultValues[field]);
          } else if (field === "firstname") {
            setValue(field, selected?.[field] || studentDefaultValues[field]);
          } else if (field === "surname") {
            setValue(field, selected?.lastname || studentDefaultValues[field]);
          } else if (field === "nationalId") {
            setValue(field, selected?.[field] || studentDefaultValues[field]);
          } else {
            setValue(field, selected?.[field] || studentDefaultValues[field]);
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
      title={isEdit ? "Modify Student" : "Add Student"}
      isFooter
      onAction={handleSubmit(onAction)}
      actionText={isEdit ? "Edit" : "Add"}
    >
      <div className=" flex flex-col gap-5 ">
        <ControlledInput control={control} name="firstname" label="First Name" />
        <ControlledInput control={control} name="surname" label="Surname" />
        <ControlledInput control={control} name="date" type="date" label="Date of Birth" />
        <ControlledInput control={control} name="nationalId" label="National ID" />
        <ControlledInput control={control} name="studentNo" label="Teacher Number" />
      </div>
    </Drawer>
  );
}

export default AddStudentDrawer;
