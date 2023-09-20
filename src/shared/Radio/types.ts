import { OptionType } from "@/@types/baseInterfaces";

export interface IRadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  options: OptionType[];
  isAll?: boolean;
  isAllLabels?: string;
  label?: string;
  row?: boolean;
}
