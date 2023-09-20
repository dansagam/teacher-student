import React from "react";
import { IRadioProps } from "./types";

const Radio = (props: IRadioProps) => {
  const { label, options, isAll, isAllLabels, name, value, row, ...rest } = props;
  const allValue = options.map((el) => el.value);
  const handleRadio = (evt: React.ChangeEvent<HTMLInputElement>, values: string) => {
    if (typeof value === "string") {
      if (values === "all") {
        if (values.length === options.length) {
          return "";
        }

        return allValue || "";
      }
      if (value !== values) {
        return values;
      }
      return "";
    }
    return "";
  };
  return (
    <div className="relative">
      <div>
        <h2 className="text-base font-normal leading-8 font-poppin">{label}</h2>
      </div>
      <fieldset
        className={`${
          row ? "grid grid-cols-2 gap-x-2 gap-y-3" : "flex flex-col justify-center gap-y-1"
        }`}
      >
        {isAll && (
          <div className="flex justify-start items-center gap-[2px] mb-2">
            <input
              type="radio"
              name={name}
              checked={value === "all" || value === allValue}
              id=""
              value="all"
              onChange={(e) => handleRadio(e, "all")}
              className="radio-primary xlsm:h-4 xlsm:w-4"
              {...rest}
            />
            <label htmlFor="" className="text-[16px] mt-[3px] xlsm:text-[15px] xlsm:leading-[16px]">
              {isAllLabels || "All"}
            </label>
          </div>
        )}
        {options.map((field, idx) => (
          <div
            key={`${field.value}-${idx}-radio`}
            className="flex justify-start items-center gap-[2px]  mb-2"
          >
            <input
              type="radio"
              name={name}
              id={`${idx}`}
              value={field.value}
              onChange={(e) => handleRadio(e, field.value)}
              checked={value === field.value}
              className="radio-primary xlsm:h-4 xlsm:w-4"
              {...rest}
            />
            <label
              htmlFor={`${idx}`}
              className="text-[16px] mt-[3px]  xlsm:text-[15px] xlsm:leading-[16px]"
            >
              {field.label}
            </label>
          </div>
        ))}
      </fieldset>
    </div>
  );
};

export default Radio;
