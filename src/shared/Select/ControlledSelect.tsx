"use client";
import React from "react";
import {
  Control,
  FieldValues,
  Path,
  FieldErrorsImpl,
  RegisterOptions,
  Controller,
} from "react-hook-form";
import Select from "./Select";

type OmitSelectProp = Omit<React.ComponentProps<typeof Select>, "onChange" | "value">;

export interface ControlledSelectProp<TFieldValues extends FieldValues> extends OmitSelectProp {
  errors?: Partial<FieldErrorsImpl<TFieldValues>>;
  control: Control<TFieldValues, any>;
  name: Path<TFieldValues>;
  rules?: Omit<
    RegisterOptions<TFieldValues, Path<TFieldValues>>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
}

function ControlledSelect<TFormValue extends FieldValues>(props: ControlledSelectProp<TFormValue>) {
  const { control, rules, name, errors, ...rest } = props;
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { ref, name: cname, onChange, ...fields }, fieldState: { error } }) => (
        <Select
          name={cname}
          {...rest}
          {...fields}
          onChange={onChange}
          error={Boolean(error?.message)}
          helperText={error?.message || ""}
        />
      )}
    />
  );
}

export default ControlledSelect;
