import { IChildren } from "@/@types/baseInterfaces";
import React from "react";

const AppLayout = ({ children }: IChildren) => {
  return (
    <div>
      <div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default AppLayout;
