import "@/styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';
import {MantineProvider} from "@mantine/core";
import {ToastContainer} from "react-toastify";

export default function App({Component, pageProps}) {
  return <>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      defaultColorScheme="dark"
    >
      <Component {...pageProps} />
      <ToastContainer />
    </MantineProvider>
  </>
}
