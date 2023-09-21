import { stringAvatar } from "@/helpers/getInitials";
import Image from "next/image";
import React from "react";

type IAvatar = {
  src?: string;
  name?: string;
  height?: number;
  width?: number;
  type?: "rounded" | "square";
};

const Avatar = (props: IAvatar) => {
  const { src, name, height, width, type = "rounded" } = props;
  return (
    <div className=" inline-block">
      {src ? (
        <Image
          src={src}
          alt="image"
          height={height}
          width={width}
          className={` ${type === "rounded" ? "rounded-full" : "rounded-md"}`}
        />
      ) : (
        <div
          {...stringAvatar(name || "AB")}
          className=" text-center font-semibold text-[14px] font-poppin rounded-full py-3 px-3"
        />
      )}
    </div>
  );
};

// Avatar.defaultProps = {
//   type: "rounded",
// };

export default Avatar;
