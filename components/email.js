/** @format */

import React from "react";
import styled from "styled-components";
import CheckBoxOutlineBlankRoundedIcon from "@material-ui/icons/CheckBoxOutlineBlankRounded";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setEmailState } from "../features/email/emailSlice";

const Email = (props) => {
	const dispatch = useDispatch();
	const router = useRouter();
	
	const { name, message, background, date, subject } = props;

	//  function to truncate(cut) the string if the length of given string
	//   bigger than  given number(n)
	const truncate = (string, n) => {
		return string?.length > n ? string.substr(0, n - 1) + "    ...." : string;
	};

	const handleClick = () => {
		dispatch(
			setEmailState({
				subject: subject,
				date: date,
				email: name,
				message: message,
			}),
		);

		router.push("/mail");
	};

	return (
		<EmailWrapper
			onClick={handleClick}
			style={{
				background: background ? "rgba(220, 227, 232)" : "transparent",
			}}>
			<div className='headding-conent'>
				<div className='mail__icons'>
					<CheckBoxOutlineBlankRoundedIcon />
					<StarBorderRoundedIcon />
				</div>

				<div className='mail-name'>{name}</div>
			</div>

			<div className='mail__content'>{truncate(message, 90)}</div>
			<div className='mail-date'>{date} </div>
		</EmailWrapper>
	);
};

export default Email;
const EmailWrapper = styled.div`
	display: flex;
	align-items: center;
	font-size: 0.9rem;
	transition: 0.3s;
	border-top: 1px solid rgba(220, 227, 232);
	border-bottom: 1px solid rgba(220, 227, 232);
	cursor: pointer;
	justify-content: space-between;
	padding: 1rem;

	&:hover {
		background-color: white;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
	}

	.headding-conent {
		width: 16rem;
		display: flex;
		align-items: center;
		overflow: hidden;
		margin-right: 1rem;
		justify-content: space-between;
	}

	.mail__icons {
		display: flex;
		width: 4rem;
		justify-content: space-between;
		@media (max-width: 568px) {
			display: none;
		}
	}

	.mail-name {
		margin-left: 0.7rem;
		font-weight: bold;
		overflow: hidden;
		min-width: 10rem;
	}

	.mail__content {
		overflow: hidden;
		height: 1rem;
		overflow: hidden;
		min-width: 15rem;
	}

	.mail-date {
		display: flex;
		justify-content: flex-end;
		min-width: 15rem;
		font-weight: bold;
		margin-left: 1rem;
	}
`;
