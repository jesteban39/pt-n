//import { Provider } from "react-redux";

//import store from "./store";

import type { AppProps } from "next/app";

import "../styles/globals.css";

{
  /* <Provider store={store}></Provider> */
}
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
