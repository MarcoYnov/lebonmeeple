import { toast } from "react-toastify";
import type { Id } from "react-toastify";

export const notifySuccess = (text: string): Id =>
  toast.success(text, {
    position: "top-left",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

export const notifyError = (text: string): Id =>
    toast.error(text, {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
