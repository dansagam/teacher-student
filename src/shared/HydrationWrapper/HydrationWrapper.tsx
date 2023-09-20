"use client";

import React from "react";
import { IChildren } from "@/@types/baseInterfaces";

const isBrowser = () => typeof window !== "undefined";
const HydrationWrapper = ({ children }: IChildren) => {
  const [mounted, setMounted] = React.useState(false);
  const bb = isBrowser();

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    if (bb) {
      setMounted(true);
    }
  }, [bb]);

  if (!mounted) {
    return null;
  }
  return <>{children}</>;
};

export default HydrationWrapper;
