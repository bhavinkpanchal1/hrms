// shared/utils/swal.ts
import Swal from "sweetalert2";

export const showLoader = (title = "Please wait") => {
  Swal.fire({
    title,
    allowOutsideClick: false,
    allowEscapeKey: false,
    didOpen: () => Swal.showLoading(),
  });
};

export const hideLoader = () => {
  Swal.close();
};
