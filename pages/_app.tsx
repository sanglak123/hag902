import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";

import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";

import { persistor, Store } from "../redux/store";

import Footer from "@/components/footer";
import Header from "@/components/hearder";
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <Header />
        <Component {...pageProps} />
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </PersistGate>
    </Provider>
  );
}
