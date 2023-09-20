import React from "react";
import {
  Control,
  FieldValues,
  Path,
  FieldErrorsImpl,
  RegisterOptions,
} from "react-hook-form/dist/types";
import { Controller } from "react-hook-form";
import { IRadioProps } from "./types";
import Radio from "./Radio";

type OmitRadioProps = Omit<
  IRadioProps,
  "name" | "error" | "value" | "onChange" | "onBlur" | "ref" | "helperText"
> & {
  subText?: string;
};

export interface IControlledRadio<TFieldValues extends FieldValues> extends OmitRadioProps {
  errors?: Partial<FieldErrorsImpl<TFieldValues>>;
  control: Control<TFieldValues, any>;
  name: Path<TFieldValues>;
  rules?: Omit<
    RegisterOptions<TFieldValues, Path<TFieldValues>>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
}

const ControlledRadio = <TFormValue extends FieldValues>(props: IControlledRadio<TFormValue>) => {
  const { control, name, rules, options, ...rest } = props;
  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({ field: { ref, name: cname, ...fields }, fieldState: { error } }) => (
        <Radio name={cname} {...fields} options={options} {...rest} />
      )}
    />
  );
};

export default ControlledRadio;
