import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { Check } from "react-bootstrap-icons";

type EmailConfirmToastProps = {
  show: boolean;
  message: string;
  onClose: () => void;
};

const EmailConfirmToast: React.FC<EmailConfirmToastProps> = (props) => {
  return (
    <ToastContainer position="top-end" className="position-fixed m-3">
      <Toast
        className="bg-success z-2"
        onClose={props.onClose}
        show={props.show}
        delay={2000}
        autohide
      >
        <Toast.Body className="fs-6">
          <Check size={30} className="text-success-dark mx-1" />
          {props.message}
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default EmailConfirmToast;
