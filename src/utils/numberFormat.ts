import React from "react";

export const formatNumber = (val: any, dp: number) => {
  const formatter = new Intl.NumberFormat("ng-NG", {
    style: "decimal",
    maximumFractionDigits: dp,
    minimumFractionDigits: dp,
  });
  //   return formatter.format(val);
  return isNaN(parseFloat(formatter.format(val))) ? "-" : formatter.format(val);
};

export const onNumberValidator = (
  e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  onChange: (
    // eslint-disable-next-line no-unused-vars
    d: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void
) => {
  const re = /^[0-9\b]+$/;
  if (e.target.value === "" || re.test(e.target.value)) {
    onChange(e);
  }
};

export function isNumeric(str: string) {
  if (typeof str !== "string") return false; // we only process strings!

  if (!isNaN(parseFloat(str))) {
    return !isNaN(parseFloat(str));
  }

  return false;
}
