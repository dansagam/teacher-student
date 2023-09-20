export type IChildren = {
  children: React.ReactNode;
};

export type OptionType = {
  label: string;
  value: string;
};

export type EmptyObject = {
  [K in string | number | symbol]: never;
};

export type IBaseSuccess = {
  message: string;
  status: number;
  success: boolean;
};
export type ISvgIcon = React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;

type TYear = `${number}${number}${number}${number}`;
type TMonth = `${number}${number}`;
type TDay = `${number}${number}`;
type THours = `${number}${number}`;
type TMinutes = `${number}${number}`;
type TSeconds = `${number}${number}`;
type TMilliseconds = `${number}${number}${number}`;

type TDateISODate = `${TYear}-${TMonth}-${TDay}`;

/**
 * Represent a string like `14:42:34.678`
 */
type TDateISOTime = `${THours}:${TMinutes}:${TSeconds}.${TMilliseconds}`;
type TDateISO = `${TDateISODate}T${TDateISOTime}Z`;

// In TS, interfaces are "open" and can be extended
interface Date {
  /**
   * Give a more precise return type to the method `toISOString()`:
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
   */
  toISOString(): TDateISO;
}

type IPrimitiveType =
  | string
  | number
  | boolean
  | undefined
  | null
  | Record<string, string | number | Date | Record<string, string>>;

export type ISetState<TField extends IPrimitiveType | IPrimitiveType[]> = React.Dispatch<
  React.SetStateAction<TField>
>;

export interface StatusType {
  active: "active";
  inactive: "inactive";
  deactivated: "deactivated";
  pending: "pending";
  warning: "warning";
  completed: "completed";
  done: "Done";
  success: "success";
  Pending: "Pending";
  loading: "loading";
  awaiting: "awaiting";
  awaitingLevelOne: "awaiting 1st Level Approval" | "awaiting 1st level approval";
  rejected: "rejected";
  Rejected: "Rejected";
  awaitingApproval1: "awaiting approval";
  awaitingApproval2: "awaitingApproval";
  awaitingApproval3: "Awaiting Approval";
  awaitingApproval: "awaitingapproval";
  disabled: "disabled";
  disable: "disable";
  approved: "approved";
  initiated: "initiated";
  Initiated: "Initiated";
  accepted: "accepted";
  Accepted: "Accepted";
  Approved: "Approved";
  Dispatched: "Dispatched";
  Delivered: "Delivered";
}
