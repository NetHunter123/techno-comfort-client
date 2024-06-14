import React from "react";
import MainHero from "@/components/modules/MainHero/MainHero";
import HomePage from "@/components/templates/HomePage/HomePage";
import Head from "next/head";

function Home() {
	return (
		<>
			<Head>
				<title>TechnoComfort</title>
				<meta name="description" content="Online Store"/>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			<HomePage/>
		</>
	)
}

export default Home
