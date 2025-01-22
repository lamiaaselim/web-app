import React from "react";
import Swal from "sweetalert2";

const ErrorAlert = ({ title, text, icon }) => {
  React.useEffect(() => {
    if (title && text) {
      Swal.fire({
        title: title,
        text: text,
        icon: icon || "error", // Default icon is 'error'
        confirmButtonText: "OK",
      });
    }
  }, [title, text, icon]);

  return null; // This component does not render anything
};

export default ErrorAlert;
