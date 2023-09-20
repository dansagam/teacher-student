import React from "react";
import { Modal } from "..";

export interface ISuccessModal {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  actionText?: string;
  onAction: () => void;
}
const SuccessModal = (props: ISuccessModal) => {
  const { open, onClose, title, description, actionText, onAction } = props;
  return (
    <Modal onClose={onClose} open={open} onAction={onAction} actionText={actionText}>
      <div className=" max-w-sm">
        <div>
          <div className=" flex flex-col justify-center gap-y-4">
            <div>logo lottie</div>
            <h1 className=" font-bold text-3xl leading-normal text-center font-sans">{title}</h1>
            <p className=" text-center font-poppin font-normal text-sm leading-normal my-2">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SuccessModal;
