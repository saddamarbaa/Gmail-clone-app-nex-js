/** @format */

import Sidebar from "../components/Sidebar";
import Widget from "../components/widget";
import Head from "next/head";
import Feed from "../components/feed";
import styled from "styled-components";
import Header from "../components/header";
import { auth } from "../config/firebase";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../config/firebase";

import SendEmail from "../components/sendMail";

import {
	setShowComposeState,
	setHideComposeState,
	selectSendMail,
} from "../features/sendMail/sendMailSlice";

import {
	setLogInState,
	setLogOutState,
	selectUser,
} from "../features/user/userSlice";
import LogIn from "./login";

const HomePage = (props) => {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const [allEmails, setAllEmails] = useState([]);

	// keep user login In
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authenticatedUser) => {
			if (authenticatedUser) {
				// User is signed in / The User was Logged in,
				// dispatch an action and change the state(save user in the global store)
				// console.log("authenticatedUser", authenticatedUser);
				dispatch(
					setLogInState({
						displayName: authenticatedUser.displayName
							? authenticatedUser.displayName
							: "",
						uid: authenticatedUser.uid,
						email: authenticatedUser.email,
						photoURL: authenticatedUser.photoURL,
					}),
				);
			} else {
				// User is signed out
				// dispatch an action and change the state(remove a user from  the global store)
				dispatch(setLogOutState());
			}
		});

		return () => {
			unsubscribe();
		};
	}, [dispatch]);

	useEffect(() => {
		const unsubscribe = db
			.collection("emails")
			.orderBy("timestamp", "desc")
			.limit(100)
			.onSnapshot((snapshot) => {
				setAllEmails(
					snapshot.docs.map((doc) => {
						return {
							data: doc.data(),
							id: doc.id,
						};
					}),
				);
			});

		return () => {
			unsubscribe();
		};
	}, []);

	const showCompose = useSelector(selectSendMail);

	if (!user) {
		return <LogIn />;
	}

	return (
		<div>
			<Head>
				<title>Gmail Clone app</title>
				<meta
					name='description'
					content='Gmail Clone app Build With React Js + Next Js'
				/>
			</Head>
			<AppWrapper>
				<Header />
				<MinWrapper className='app-bod'>
					<Sidebar allEmails={allEmails} />
					<Feed allEmails={allEmails} />
					<Widget />
				</MinWrapper>
				{showCompose && <SendEmail />}
			</AppWrapper>
		</div>
	);
};

export default HomePage;

const MinWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: nowrap;
	min-height: 85vh;
	width: 100%;
	border-left: 0;
`;

const AppWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100vw;
	min-height: 100vh;
`;
