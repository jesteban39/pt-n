import { Provider } from "react-redux";
import type { AppProps } from "next/app";
//import CssBaseline from "@mui/material/CssBaseline";

import store from "../store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
