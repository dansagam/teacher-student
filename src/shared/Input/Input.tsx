import React from "react";
import { InputProps } from "./type";

const Input = (props: InputProps) => {
  const { type, label, name, helperText, error, startAdornment, endAdornment, value, ...rest } =
    props;
  const [showPassword, setShowPassword] = React.useState(false);
  const renderPasswordToggle = () => {
    if (type === "password") {
      return (
        <div className=" absolute inline-block text-common-black opacity-50 -translate-y-1/2 right-1 top-2/4 cursor-pointer px-1 mr-1">
          <button
            className="btn-icon"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {showPassword ? "hide" : "show"}
          </button>
        </div>
      );
    }
    return (
      endAdornment && (
        <span className=" absolute inline-block text-common-black opacity-50 -translate-y-1/2 right-1 top-2/4 cursor-pointer px-1 mr-1">
          {endAdornment}
        </span>
      )
    );
  };
  return (
    <div>
      <div className="relative border border-neutrals-6 my-1  rounded-xl">
        <input
          type={showPassword ? "text" : type}
          id="input-controlled"
          name={name}
          value={value}
          className="peer/input block min-h-[auto] text-text-secondary focus:text-text-primary focus:border-primary-main  w-full active:text-[#23262F] focus:bg-transparent  bg-transparent px-3 py-[0.62rem]  leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus/input:text-primary-main motion-reduce:transition-none dark:text-neutral-700 dark:placeholder:text-neutral-200 dark:peer-focus/input:text-primary-main"
          {...rest}
        />
        <label
          htmlFor="input-controlled"
          data-app-active={Boolean(value)}
          className=" pointer-events-none data-[app-active=true]:-translate-y-[0.9rem] data-[app-active=true]:scale-[0.8] peer-focus/input:bg-background-main peer-focus/input:bg-opacity-50 absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-common-black transition-all duration-200 ease-out peer-focus/input:-translate-y-[0.9rem] peer-focus/input:scale-[0.8] peer-focus/input:text-primary-main  motion-reduce:transition-none dark:text-neutral-500 dark:peer-focus/input:text-primary-main"
          // className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
        >
          {label}
        </label>

        {startAdornment && (
          <span className=" absolute text-common-black -translate-y-1/2 opacity-50 inline-block left-2 top-2/4">
            {startAdornment}
          </span>
        )}
        {renderPasswordToggle()}
      </div>
      <div>{helperText && <p className="text-[red] text-[12px]">{helperText}</p>}</div>
    </div>
  );
};

export default Input;
