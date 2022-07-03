import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<meta charSet="utf-8" />
					<meta name="author" content="Saddam Arbaa" />
					<meta name="description" content="Gmail Clone app" />
					<meta
						name="description"
						content="Gmail Clone, React + Next Js App , Saddam Arbaa"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
					{/* // for add Portal */}
					<div id="backdrop--root" />
					<div id="modal--overlay--root" />
				</body>
			</Html>
		)
	}
}

export default MyDocument
