export interface MessageType {
	id: string
	email: string
	subject: string
	message: string
	timestamp: {
		seconds: number
		nanoseconds: number
	}
}

export interface EmailType {
	date: string
	subject: string
	message: string
	email: string
}
