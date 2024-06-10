import {Navbar} from "@/components/modules/Navbar/NavBar";
import Header from "@/components/modules/Header/Header";
import {Button, MantineProvider} from "@mantine/core";
import {useRouter} from "next/router";
import {EffectorNext} from "@effector/next";
import Footer from "@/components/modules/Footer/Footer";
import NextNProgress from 'nextjs-progressbar';
import styles from './main-layout.module.css'
import {ToastContainer} from "react-toastify";
import {useUnit} from "effector-react";
import {setUser} from "@/context/user";
import {checkAuthFx} from "@/app/api/auth";
import {useEffect} from "react";

const MainLayout = ({children, pageProps}) => {
	const router = useRouter()
	
	const activeLayout = router.pathname !== "/auth"
	return (<>
		<EffectorNext values={pageProps?.values}>
			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				defaultColorScheme="dark"
			>
				<NextNProgress color="var(--m-accent-400)"/>
				{activeLayout ? <div className={styles.layout__root}>
						
						<Header/>
						<div className={styles.layout__wrap}>
							<aside className={styles.layout__aside}>
								<Navbar/>
							</aside>
							<main className={styles.layout__content}>
								{children}
								<Footer/>
							</main>
						</div>
					</div>
					: <main>{children}</main>
				}
				<ToastContainer/>
			</MantineProvider>
		</EffectorNext>
	</>)
}


export default MainLayout
