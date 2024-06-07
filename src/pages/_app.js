import "@/styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';
import MainLayout from "@/components/layout/MainLayout";

export default function App({Component, pageProps}) {
	
	return <>
		<MainLayout pageProps={pageProps}>
			<Component {...pageProps} />
		</MainLayout>
	</>
}
