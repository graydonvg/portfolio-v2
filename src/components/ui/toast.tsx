import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Toast() {
  return (
    <ToastContainer
      position="top-center"
      autoClose={4000}
      theme="dark"
      rtl={false}
      transition={Bounce}
    />
  );
}
