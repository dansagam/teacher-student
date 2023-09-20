"use client";

import React from "react";
import { Listbox, Transition } from "@headlessui/react";
import { OptionType } from "@/@types/baseInterfaces";

type SelectProp = {
  options: OptionType[];
  value: string;
  onChange: (values: string) => void;
  label: string;
  error?: boolean;
  helperText?: string;
  name?: string;
};
function Select(props: SelectProp) {
  const { options, onChange, value, label, name } = props;

  const getLabel = (values: string) => {
    return options.find((fiel) => fiel.value === values)?.label || "";
  };
  return (
    <Listbox name={name} value={value} onChange={onChange}>
      <Listbox.Label>{label}</Listbox.Label>
      <Listbox.Button>{getLabel(value)}</Listbox.Button>

      <Transition
        as={React.Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Listbox.Options>
          {options.map((fields, idx) => (
            <Listbox.Option key={`${fields.label}-${idx}`} value={fields.value}>
              {fields.label}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
}

export default Select;
