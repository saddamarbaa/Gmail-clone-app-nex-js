/** @format */

import Sidebar from "../components/Sidebar";
import Widget from "../components/widget";
import Head from "next/head";
import IndividualMail from "../components/IndividualMail";
import styled from "styled-components";
import Layout from "../components/Layout";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";

import LogIn from "./login";

function MailPage(props) {
	const user = useSelector(selectUser);

	if (!user) {
		return <LogIn />;
	}

	return (
		<Layout>
			<div>
				<Head>
					<title>Gmail Clone app</title>
					<meta
						name='description'
						content='Gmail Clone app Build With React Js + Next Js'
					/>
				</Head>
				<MinWrapper className='app-bod'>
					<Sidebar />
					<IndividualMail />

					<Widget />
				</MinWrapper>
			</div>
		</Layout>
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
