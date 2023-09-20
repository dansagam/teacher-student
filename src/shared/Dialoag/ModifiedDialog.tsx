import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IModifiedDialog } from "./types";
import CircularProgress from "@/shared/CircularProgress";
import { IChildren } from "@/@types/baseInterfaces";

const Modal = (props: IModifiedDialog) => {
  const {
    open,
    onAction,
    actionText,
    onClose,
    title,
    children,
    secActionText,
    onSeconAction,
    description,
    loading,
    disabled,
    isSecCancel,
    width,
    className,
    isStay,
    isregister,
    onSwitchReg,
    footerText,
    footSecText,
    isForm,
  } = props;
  return (
    <Transition appear show={open} as={React.Fragment}>
      <Dialog as="div" className="relative z-70" onClose={isStay ? () => {} : onClose}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div
          className="fixed inset-0 overflow-y-auto hide-scrolbar"
          onClick={isStay ? () => {} : onClose}
        >
          <div className="flex items-center justify-center min-h-full p-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={`w-full max-w-[410px] ${
                  className || ""
                } md:max-w-full transform overflow-auto hide-scrolbar rounded-2xl bg-white ${
                  width || ""
                } text-left align-middle shadow-xl transition-all `}
              >
                <Dialog.Title className="px-4 py-3 border-b">
                  <div className="flex items-center justify-between font-semibold">
                    <p className="flex-1 text-neutral-black">{title || ""}</p>
                    <button className="p-1 rounded-full hover:bg-gray-400" onClick={onClose}>
                      X
                    </button>
                  </div>
                </Dialog.Title>
                <Dialog.Description className="">
                  {description && (
                    <p className="my-2 text-sm text-neutral-bodyText">{description}</p>
                  )}
                </Dialog.Description>
                <RenderForm isForm={isForm} onAction={onAction}>
                  <div className="px-[17px]">{children}</div>
                  <div className="px-[17px]">
                    <div className="flex items-center justify-center gap-3 p-3">
                      {secActionText && (
                        <button
                          className="text-lg btn-secondary btn-medium"
                          disabled={disabled || loading}
                          onClick={() => {
                            if (isSecCancel) {
                              onClose();
                            } else {
                              if (onSeconAction) {
                                onSeconAction();
                              }
                            }
                          }}
                        >
                          {secActionText || "Close"}
                        </button>
                      )}
                      {actionText && (
                        <button
                          className="flex items-center justify-center w-full gap-2 text-lg btn-primary btn-medium"
                          onClick={() => {
                            if (!isForm) {
                              if (onAction) {
                                onAction();
                              }
                            }
                          }}
                          type={isForm ? "submit" : "button"}
                          disabled={disabled || loading}
                        >
                          {actionText || "Ok"} {loading && <CircularProgress />}
                        </button>
                      )}
                    </div>
                  </div>
                </RenderForm>
                {isregister && (
                  <div className="flex items-center justify-center gap-2 mb-[25px] mt-[20px]">
                    {footSecText}
                    <span
                      className="cursor-pointer text-primary-main hover:underline"
                      onClick={() => {
                        if (onSwitchReg) {
                          onSwitchReg();
                        }
                      }}
                    >
                      {footerText}
                    </span>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

interface RenderFormProps extends IChildren {
  isForm?: boolean;
  onAction?: () => void;
}
function RenderForm(props: RenderFormProps) {
  const { isForm, onAction, children } = props;

  if (isForm) {
    return (
      <form
        action=""
        className=" w-full h-auto"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          if (onAction) {
            onAction();
          }
        }}
      >
        {children}
      </form>
    );
  }

  return <div className=" w-full h-auto">{children}</div>;
}
export default React.memo(Modal);
