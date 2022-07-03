// Auth

export interface AuthRequestType {
	email: string
	password: string
}

export interface AuthResponseType {
	email: string
	displayName?: string
	uid: string
	photoURL?: string
}
