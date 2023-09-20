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
import Input from "./Input";
import { onNumberValidator } from "@/utils/numberFormat";

type OmitInputProps = Omit<
  React.ComponentProps<typeof Input>,
  "name" | "error" | "value" | "onChange" | "onBlur" | "ref" | "helperText"
> & {
  subText?: string;
  isNumber?: boolean;
};

export interface IControlledInputProp<TFieldValues extends FieldValues> extends OmitInputProps {
  errors?: Partial<FieldErrorsImpl<TFieldValues>>;
  control: Control<TFieldValues, any>;
  name: Path<TFieldValues>;
  rules?: Omit<
    RegisterOptions<TFieldValues, Path<TFieldValues>>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
}

const ControlledInput = <TFormValue extends FieldValues>(
  props: IControlledInputProp<TFormValue>
) => {
  const { control, rules, name, errors, isNumber, ...rest } = props;
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { ref, name: cname, onChange, ...fields }, fieldState: { error } }) => (
        <Input
          name={cname}
          {...rest}
          {...fields}
          onChange={
            isNumber
              ? (e) => {
                  onNumberValidator(e, onChange);
                }
              : onChange
          }
          error={Boolean(error?.message)}
          helperText={error?.message || ""}
        />
      )}
    />
  );
};

export default ControlledInput;
