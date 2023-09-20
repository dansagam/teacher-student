import React from "react";
import ReactDOM from "react-dom";
import { twMerge } from "tailwind-merge";
import { FaTimes } from "react-icons/fa";
// import IconButton from "@/shared/Button/IconButton";
import Button from "@/shared/Button/Button";
import { IChildren } from "@/@types/baseInterfaces";

type DrawerProps = {
  title: string;
  onClose(): void;
  open: boolean;
  onAction?: () => void;
  onSecAction?: () => void;
  isFooter?: boolean;
  actionText?: string;
  secActionText?: string;
  loading?: boolean;
  anchor?: "left" | "right";
  fullScreen?: boolean;
  DrawerContainerProp?: React.HTMLAttributes<HTMLDivElement>;
  DrawerMainProp?: React.HTMLAttributes<HTMLDivElement>;
  DrawerFooterProp?: React.HTMLAttributes<HTMLDivElement>;
  actionSeverity?: "error" | "secondary" | "primary" | "success";
  secActionSeverity?: "error" | "secondary" | "primary" | "success";
} & IChildren;

function Drawer(props: DrawerProps) {
  const {
    children,
    onClose,
    title,
    open,
    anchor = "right",
    isFooter,
    actionText,
    onAction,
    onSecAction,
    secActionText,
    loading,
    DrawerContainerProp,
    DrawerMainProp,
    fullScreen,
    DrawerFooterProp,
    actionSeverity,
    secActionSeverity,
  } = props;
  const [bodyOverflow, setBodyOverflow] = React.useState("");
  const containerClassName = DrawerContainerProp?.className;
  const mainClassName = DrawerMainProp?.className;
  const footerClassName = DrawerFooterProp?.className;
  delete DrawerContainerProp?.className, DrawerMainProp?.className, DrawerFooterProp?.className;

  React.useEffect(() => {
    if (open) {
      setBodyOverflow(document.body.style.overflow);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = bodyOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const closeDrawer = () => {
    document.body.style.overflow = bodyOverflow;
    onClose();
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div role="presentation" className="Apilme-App-Drawer-root">
          <div
            data-app-active={Boolean(open)}
            onClick={closeDrawer}
            className="Apilme-App-Drawer-overlay hidden data-[app-active=true]:block transition-opacity duration-200 opacity-0 data-[app-active]:opacity-30 w-full h-screen bg-common-black top-0 z-10 fixed"
          />
          <div
            data-app-active={Boolean(open)}
            className={twMerge(
              ...[
                "Apilme-App-Drawer-frame bg-common-white w-[25.6rem] sm:w-[60vw] h-screen fixed top-0 p-[2.5rem_1.15rem] z-[320] transition-transform duration-200 transform",
                anchor === "right"
                  ? "right-0 data-[app-active=false]:translate-x-full"
                  : "left-0 data-[app-active=false]:-translate-x-full",
                !fullScreen && "max-w-md",
              ]
            )}
          >
            <div
              className={twMerge(
                "Apilme-App-Drawer-container h-full relative w-full grid items-stretch overflow-y-auto grid-rows-[auto_1fr_auto]",
                containerClassName
              )}
              {...DrawerContainerProp}
            >
              {title && (
                <div className="Apilme-App-Drawer-header grid grid-cols-[1fr_auto] items-center">
                  <p className="flex-1 text-[#202020] font-medium font-cabinet text-3xl ">
                    {title}
                  </p>
                  <button
                    className="btn-icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      closeDrawer();
                    }}
                  >
                    <FaTimes className=" text-red-500  text-base" />
                  </button>
                </div>
              )}
              <div
                className={twMerge(...["Apilme-App-Drawer-main w-full", mainClassName])}
                {...DrawerMainProp}
              >
                {children}
              </div>
              {isFooter && (
                <div
                  className={twMerge(
                    ...[
                      "Apilme-App-Drawer-footer sticky bottom-0 grid items-center z-10",
                      footerClassName,
                    ]
                  )}
                  {...DrawerFooterProp}
                >
                  <div className=" flex items-center justify-stretch gap-3">
                    {secActionText && (
                      <Button
                        color={secActionSeverity || "secondary"}
                        loading={loading}
                        onClick={() => {
                          if (onSecAction) {
                            onSecAction();
                          }
                        }}
                        className="flex-1"
                      >
                        {secActionText || "Cancel"}
                      </Button>
                    )}
                    {actionText && (
                      <Button
                        color={actionSeverity || "primary"}
                        loading={loading}
                        onClick={() => {
                          if (onAction) {
                            onAction();
                          }
                        }}
                        className="flex-1"
                      >
                        {actionText}
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </React.Fragment>
  );
}

export default React.memo(Drawer);
