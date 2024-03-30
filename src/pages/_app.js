import "@/styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';
import {MantineProvider} from "@mantine/core";
import {ToastContainer} from "react-toastify";
import {EffectorNext} from "@effector/next";

export default function App({Component, pageProps}) {
  return <>

    <EffectorNext values={pageProps.values}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        defaultColorScheme="dark"
      >
        <Component {...pageProps} />
      </MantineProvider>
      <ToastContainer/>
    </EffectorNext>
  </>
}
