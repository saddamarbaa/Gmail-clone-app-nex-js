import type { GetServerSideProps } from 'next'
import Sidebar from '../components/Sidebar'
import Widget from '../components/widget'
import Head from 'next/head'
import Feed from '../components/feed'
import styled from 'styled-components'
import Header from '../components/header'
import { auth, db } from '../config/firebase'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
	getDocs,
	collection,
	onSnapshot,
	orderBy,
	query,
	limit,
} from '@firebase/firestore'

import SendEmail from '../components/sendMail'

import { selectSendMail } from '../features/sendMail/sendMailSlice'

import {
	setLogInState,
	setLogOutState,
	selectUser,
} from '../features/user/userSlice'
import LogIn from './login'
import { MessageType } from '../types'

type Props = {
	allEmailsProps: MessageType[]
}
const HomePage = ({ allEmailsProps }: Props) => {
	const dispatch = useDispatch()
	const user = useSelector(selectUser)
	const [allEmails, setAllEmails] = useState<MessageType[]>(allEmailsProps)
	const showCompose = useSelector(selectSendMail)

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authenticatedUser) => {
			if (authenticatedUser && authenticatedUser?.email) {
				dispatch(
					setLogInState({
						displayName: authenticatedUser.displayName
							? authenticatedUser.displayName
							: '',
						uid: authenticatedUser?.uid,
						email: authenticatedUser?.email,
						photoURL: authenticatedUser?.photoURL || '',
					}),
				)
			} else {
				dispatch(setLogOutState())
			}
		})

		return () => {
			unsubscribe()
		}
	}, [dispatch])

	useEffect(() => {
		const unsubscribe = onSnapshot(
			query(collection(db, 'emails'), orderBy('timestamp', 'desc'), limit(100)),
			(snapshot) =>
				setAllEmails(
					snapshot.docs.map((doc) => ({
						id: doc.id && doc.id,
						timestamp: doc.data()?.timestamp,
						email: doc.data()?.email,
						subject: doc.data()?.subject,
						message: doc.data()?.message,
					})),
				),
		)

		return () => {
			unsubscribe()
		}
	}, [])

	if (!user) {
		return <LogIn />
	}

	return (
		<div>
			<Head>
				<title>Gmail Clone app</title>
				<meta
					name="description"
					content="Gmail Clone app Build With React Js + Next Js"
				/>
			</Head>
			<AppWrapper>
				<Header />
				<MinWrapper className="app-bod">
					<Sidebar allEmails={allEmails} />
					<Feed allEmails={allEmails} />
					<Widget />
				</MinWrapper>
				{showCompose && <SendEmail />}
			</AppWrapper>
		</div>
	)
}

export default HomePage

export const getServerSideProps: GetServerSideProps = async () => {
	const colRef = collection(db, 'emails')
	const docsSnap = await getDocs(colRef)

	const allEmails: MessageType[] = []

	if (docsSnap.docs.length > 0) {
		docsSnap.forEach((doc) =>
			// @ts-ignore
			allEmails.push({
				id: doc.id && doc.id,
				email: doc?.data()?.email,
				subject: doc?.data()?.subject,
				message: doc?.data()?.message,
				timestamp: {
					seconds: doc?.data()?.timestamp?.seconds,
					nanoseconds: doc?.data()?.timestamp?.nanoseconds,
				},
			}),
		)
	}

	// Pass data to the page via props
	return { props: { allEmailsProps: allEmails } }
}

const MinWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: nowrap;
	min-height: 85vh;
	width: 100%;
	border-left: 0;
`

const AppWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100vw;
	min-height: 100vh;
`
