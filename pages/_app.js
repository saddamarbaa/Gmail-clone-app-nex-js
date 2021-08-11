/** @format */

import Head from "next/head";
import "../styles/globals.css";

import { store } from "../app/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Head>
				<meta charSet='UTF-8' />
				<meta
					name='description'
					content='Gmail Clone app Build With React Js + Next Js'
				/>
				<meta
					name='keywords'
					content='Gmail Clone, React + Next Js App , Saddam Arbaa'
				/>
				<meta name='author' content='Saddam Arbaa' />

				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>

				<title>Gmail Clone app</title>
			</Head>
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
