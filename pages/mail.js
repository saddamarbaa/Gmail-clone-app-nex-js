/** @format */

import Sidebar from "../components/Sidebar";
import Widget from "../components/widget";
import Head from "next/head";
import IndividualMail from "../components/individualMail";
import styled from "styled-components";
import Layout from "../components/Layout";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";
import Header from "../components/header";
import LogIn from "./login";

import SendEmail from "../components/sendMail";

import {
	setShowComposeState,
	setHideComposeState,
	selectSendMail,
} from "../features/sendMail/sendMailSlice";

function MailPage(props) {
	const user = useSelector(selectUser);
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
					<Sidebar />
					<IndividualMail />
					<Widget />
				</MinWrapper>
				{showCompose && <SendEmail />}
			</AppWrapper>
		</div>
	);
}

export default MailPage;

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
