import { IChildren } from "@/@types/baseInterfaces";
import React from "react";

export interface IModifiedDialog extends IChildren {
  open: boolean;
  onClose: () => void;
  onAction: () => void;
  onSeconAction?: () => void;
  secActionText?: string;
  actionText?: string;
  title?: string;
  description?: string;
  subTitle?: string;
  loading?: boolean;
  disabled?: boolean;
  isSecCancel?: boolean;
  width?: string;
  className?: string;
  isStay?: boolean;
  isregister?: boolean;
  onSwitchReg?: () => void;
  footerText?: string;
  footSecText?: string;
  isForm?: boolean;
}

export interface ISuccessModal {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  subTitle?: string;
  isTitle?: boolean;
  actionText?: string;
  content?: string;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>> & { title?: string | undefined };
}
