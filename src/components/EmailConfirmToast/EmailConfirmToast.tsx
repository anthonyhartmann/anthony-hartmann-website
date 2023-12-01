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
    <ToastContainer
      position="top-end"
      style={{ position: "fixed", margin: "10px" }}
    >
      <Toast
        style={{
          backgroundColor: "mediumseagreen",
          zIndex: "2",
        }}
        onClose={props.onClose}
        show={props.show}
        delay={2000}
        autohide
      >
        <Toast.Body style={{ fontSize: "1.1em" }}>
          <Check size={30} color="#076620" style={{ margin: "0 6 2 0" }} />
          {props.message}
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default EmailConfirmToast;
