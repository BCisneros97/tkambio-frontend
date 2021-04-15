import Swal from "sweetalert2";

const confirmDialog = (question, confirmMessage, cancelMessage) => {
  return Swal.fire({
    text: question,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: confirmMessage,
    cancelButtonText: cancelMessage,
  });
}

const successDialog = (title, message) => {
  Swal.fire(title, message, "success");
};

const errorDialog = (title, message) => {
  Swal.fire(title, message, "error");
}

export { confirmDialog, successDialog, errorDialog };