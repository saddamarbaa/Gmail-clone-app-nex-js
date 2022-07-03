import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import Image from 'next/image'
import { useRouter } from 'next/router'

import {
	auth,
	GoogleAuthProvider,
	googleProvider,
	signInWithPopup,
} from '../config/firebase'

const LogIn = () => {
	const router = useRouter()

	const signInWithGoogleHandler = (event: { preventDefault: () => void }) => {
		event.preventDefault()
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result)
				const token = credential?.accessToken
				// The signed-in user info.
				const user = result.user
				router.push('/')
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code
				const errorMessage = error.message
				// The email of the user's account used.
				const email = error.customData.email
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error)
				alert(errorMessage)
			})
	}

	return (
		<LoginWrapper>
			<LoginContainer>
				<div
					className="logo"
					style={{
						position: 'relative',
						cursor: 'pointer',
					}}>
					<Image
						className="logo-img"
						src="/images/ws.png"
						alt="logo"
						layout="fill"
						objectFit="contain"
					/>
				</div>

				<LoginText>
					<h2>Sign in to Gmail</h2>
				</LoginText>
				<Button onClick={signInWithGoogleHandler}>Sign In With Google</Button>
			</LoginContainer>
		</LoginWrapper>
	)
}

export default LogIn

const LoginWrapper = styled.div`
	display: grid;
	background: #f8f8f8;
	width: 100vw;
	height: 100vh;
	place-items: center;
`

const LoginContainer = styled.div`
	.logo {
		width: 7.62rem;
		height: 7rem;
		margin-left: 1.5rem;
		margin-bottom: 2rem;
	}
	padding: 100px;
	padding-top: 50px;
	text-align: center;
	background-color: white;
	border-radius: 6px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
	/* Overwrite material-ui styling */
	button {
		margin-top: 50px;
		text-transform: inherit !important;
		background-color: #0a8f48;
		border-color: #0a8f48;
		color: white;
		font-size: 17px;
		transition: 0.5;
		padding: 0.7rem 1rem;
	}
	button:hover {
		background-color: #075e54;
		border-color: #075e54;
	}
`

const LoginText = styled.div``
