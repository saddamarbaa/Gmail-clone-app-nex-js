import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import ProgressBar from '@badrap/bar-of-progress'

import Head from 'next/head'
import { store } from '../app/store'
import { Provider } from 'react-redux'

const progress = new ProgressBar({
	// The size (height) of the progress bar.
	// Numeric values get converted to px.
	size: 2,

	// Color of the progress bar.
	// Also used for the glow around the bar.
	color: '#29e',

	// Class name used for the progress bar element.
	className: 'bar-of-progress',

	// How many milliseconds to wait before the progress bar
	// animation starts after calling .start().
	delay: 80,
})

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Head>
				<meta charSet="UTF-8" />
				<meta
					name="description"
					content="Gmail Clone app Build With React Js + Next Js"
				/>
				<meta
					name="keywords"
					content="Gmail Clone, React + Next Js App , Saddam Arbaa"
				/>
				<meta name="author" content="Saddam Arbaa" />

				<meta name="viewport" content="width=device-width, initial-scale=1.0" />

				<title>Gmail Clone app</title>
			</Head>
			<Component {...pageProps} />
		</Provider>
	)
}

export default MyApp
