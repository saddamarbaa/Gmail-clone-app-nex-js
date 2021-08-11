/** @format */

import React from "react";
import styled from "styled-components";

import Header from "./header";
import Sidebar from "./Sidebar";
import Feed from "./feed";
import Widget from "./widget";
import SendEmail from "./sendMail";
import { useDispatch, useSelector } from "react-redux";

import {
	setShowComposeState,
	setHideComposeState,
	selectSendMail,
} from "../features/sendMail/sendMailSlice";

const Layout = (props) => {
	const showCompose = useSelector(selectSendMail);

	return (
		<AppWrapper>
			<Header />
			<main className='app-bod'>{props.children}</main>
			{showCompose && <SendEmail />}
		</AppWrapper>
	);
};

export default Layout;

const AppWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100vw;
	min-height: 100vh;
`;
