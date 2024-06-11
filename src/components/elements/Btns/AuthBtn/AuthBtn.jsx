import React, {useEffect, useState} from 'react';
import styles from './auth.module.css';
import {Button, Menu} from "@mantine/core";
import {SlLogin} from "react-icons/sl";
import Link from "next/link";
import {useUnit} from "effector-react";
import {$userStore, setUser} from "@/context/user";
import {CiLogout} from "react-icons/ci";
import {useMediaQuery} from "@mantine/hooks";
import {checkAuthFx, logOutFx} from "@/app/api/auth";

const AuthBtn = () => {
	const isMedia567 = useMediaQuery('(min-width: 567px)')
	const userProvider = useUnit($userStore);
	const setUserP = useUnit(setUser);
	const [user, setUserState] = useState(userProvider);
	
	const checkAuth = async () => {
		const check = await checkAuthFx()
		
		setUserState(check)
		setUserP(check)
	}
	
	useEffect(() => {
		checkAuth()
	}, []);
	
	
	const handleLogout = () => {
		logOutFx()
		setUserState(false)
	}
	
	
	console.log("user", user)
	return (<>{!user ?
		<Button
			component={Link}
			href="/auth"
			className={styles.signin__button}
			variant="light"
			color="var(--m-accent-400)"
			rightSection={<SlLogin size={"18px"}/>}
			aria-label="sign-in"
		>
			Вхід
		</Button> :
		<Menu shadow="md" width={200} position={isMedia567 ? "bottom-end" : "right-center"}>
			<Menu.Target>
				<Button
					className={styles.signin__button_mini}
					variant="light"
					color="var(--m-accent-400)"
				>
					{`${user.name?.substring(0, 1).toUpperCase()}${user.surname?.substring(0, 1).toUpperCase()}`}
				</Button>
			</Menu.Target>
			
			<Menu.Dropdown>
				<Menu.Label>Application</Menu.Label>
				
				<Menu.Item
					color="red"
					leftSection={<CiLogout size="18px"/>}
					onClick={handleLogout}
				>
					Вийти з акаунту
				</Menu.Item>
			</Menu.Dropdown>
		</Menu>}
	</>);
};

export default AuthBtn;
