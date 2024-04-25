import "@/styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';
import {MantineProvider} from "@mantine/core";
import {ToastContainer} from "react-toastify";
import {EffectorNext} from "@effector/next";
import MainLayout from "@/components/layout/MainLayout";

export default function App({Component, pageProps}) {
	
	return <>
		<MainLayout pageProps={pageProps}>
			<Component {...pageProps} />
			<ToastContainer/>
		</MainLayout>
	</>
	
	
	// const getLayout = Component.getLayout || ((page) => page);
	// console.log(pageProps)
	//
	// return getLayout(
	// 	<>
	// 		{/*<EffectorNext values={pageProps.values}>*/}
	// 		{/*	<MantineProvider*/}
	// 		{/*		withGlobalStyles*/}
	// 		{/*		withNormalizeCSS*/}
	// 		{/*		defaultColorScheme="dark"*/}
	// 		{/*	>*/}
	// 		<Component {...pageProps} />
	// 		{/*<Layout pageProps={pageProps} />*/}
	// 		{/*</MantineProvider>*/}
	// 		<ToastContainer/>
	// 		{/*</EffectorNext>*/}
	// 	</>
	// );
}
