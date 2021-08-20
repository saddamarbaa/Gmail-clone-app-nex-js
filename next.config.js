/** @format */

module.exports = {
	reactStrictMode: true,

	env: {
		API_KEY: process.env.REACT_APP_FIREBASE_API_KEY,
		AUTH_DOMAIN: process.env.REACT_APP_AUTH_DOMAIN,
		PROJECT_ID: process.env.REACT_APP_PROJECT_ID,
		STORAGE_BUCKET: process.env.REACT_APP_STORAGE_BUCKET,
		MESSAIN_SENDER_ID: process.env.REACT_APP_MESSAIN_SENDER_ID,
		APPID: process.env.REACT_APP_APPID,
	},
};
