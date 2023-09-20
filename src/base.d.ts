// declare module "react" {
//   // interface HTMLProps<T> {
//   //   block?: string;
//   //   element?: string;
//   //   modifiers?: string;
//   // }
//   interface HTMLAttributes<T> {
//     "data-app-active"?: boolean;
//     "data-app-disabled"?: boolean;
//     "data-app-error"?: boolean;
//     "data-app-indeterminate"?: boolean;
//   }
// }

export {};

declare global {
  interface Window {
    initMap: () => void;
  }
}
