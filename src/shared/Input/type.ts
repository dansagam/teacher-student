import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  helperText?: string | React.ReactNode;
  label?: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}
