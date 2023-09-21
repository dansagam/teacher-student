import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { IChildren, OptionType } from "@/@types/baseInterfaces";

type MenuProps = {
  options: (Omit<OptionType, "label"> & {
    onClick?: () => void;
    label: React.ReactNode | string;
  })[];
} & IChildren;

function Dropdown(props: MenuProps) {
  const { children, options } = props;
  return (
    <Menu>
      <Menu.Button>{children}</Menu.Button>

      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 z-30 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {options.map((field, idx) => (
            <div className="py-2 px-1" key={`${field.value}-${idx}`}>
              <Menu.Item>{field.label}</Menu.Item>
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default Dropdown;
