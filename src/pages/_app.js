import "@/styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';
import MainLayout from "@/components/layout/MainLayout";
import {useEffect, useState} from "react";
import {checkAuthFx} from "@/app/api/auth";
import {useUnit} from "effector-react";
import {setUser} from "@/context/user";

function App({Component, pageProps}) {
	const setUserP = useUnit(setUser);
	const [userState, setUserState] = useState({});
	const checkAuth = async () => {
		try {
			const check = await checkAuthFx(); // Перевіряємо авторизацію при першому завантаженні додатку
			setUserP(check);
		} catch (error) {
			console.error("Authorization check failed:", error);
		}
	};
	
	
	useEffect( () => {
		checkAuth();
	}, []);
	
	return <>
		<MainLayout pageProps={pageProps}>
			<Component {...pageProps} />
		</MainLayout>
	</>
}

export default App;
