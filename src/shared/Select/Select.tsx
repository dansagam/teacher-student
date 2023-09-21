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
      <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
        {getLabel(value)}
      </Listbox.Button>

      <Transition
        as={React.Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Listbox.Options className="absolute mt-1 z-30 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {options.map((fields, idx) => (
            <Listbox.Option
              className="hover:bg-primary-main px-2 py-2 border-b"
              key={`${fields.label}-${idx}`}
              value={fields.value}
            >
              {fields.label}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
}

export default Select;
