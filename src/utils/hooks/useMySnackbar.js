import { useSnackbar } from "notistack";

/** My custom hook to simplify the useSnackbar hook
 * and the enqueueSnackbar function. */
const useMySnackbar = () => {
  const { enqueueSnackbar } = useSnackbar();

  /** To get a default snackbar. */
  const inherit = (msg) => {
    enqueueSnackbar(msg, {
      variant: "default",
    });
  };

  /** To get a success snackbar. */
  const success = (msg) => {
    enqueueSnackbar(msg, {
      variant: "success",
    });
  };

  /** To get a error snackbar. */
  const err = (msg) => {
    enqueueSnackbar(msg, {
      variant: "error",
    });
  };

  /** To get a warning snackbar. */
  const warn = (msg) => {
    enqueueSnackbar(msg, {
      variant: "warning",
    });
  };

  /** To get a info snackbar. */
  const info = (msg) => {
    enqueueSnackbar(msg, {
      variant: "info",
    });
  };
  return { inherit, success, err, warn, info };
};
export default useMySnackbar;
