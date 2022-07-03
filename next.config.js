const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			reactStrictMode: true,
			env: {
				API_KEY: process.env.API_KEY,
				AUTH_DOMAIN: process.env.AUTH_DOMAIN,
				PROJECT_ID: process.env.PROJECT_ID,
				STORAGE_BUCKET: process.env.STORAGE_BUCKET,
				MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
				APP_ID: process.env.APP_ID,
			},
		}
	}

	return {
		reactStrictMode: true,
		env: {
			API_KEY: process.env.API_KEY,
			AUTH_DOMAIN: process.env.AUTH_DOMAIN,
			PROJECT_ID: process.env.PROJECT_ID,
			STORAGE_BUCKET: process.env.STORAGE_BUCKET,
			MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
			APP_ID: process.env.APP_ID,
		},
	}
}
