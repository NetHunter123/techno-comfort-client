import React from 'react';
import styles from './sign-in-btn.module.css';
import {Button} from "@mantine/core";
import {PiSignIn} from "react-icons/pi";
import {SlLogin} from "react-icons/sl";
import Link from "next/link";

const SignInBtn = () => {
	return (
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
		</Button>
	);
};

export default SignInBtn;
