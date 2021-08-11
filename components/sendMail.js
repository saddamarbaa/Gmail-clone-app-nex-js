/** @format */

import styled from "styled-components";
import React, { memo, useRef, useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import CreateIcon from "@material-ui/icons/Create";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import FormatColorTextIcon from "@material-ui/icons/FormatColorText";
import InsertLinkIcon from "@material-ui/icons/InsertLink";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import DeleteIcon from "@material-ui/icons/Delete";
import RemoveIcon from "@material-ui/icons/Remove";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { useForm } from "react-hook-form";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { setHideComposeState } from "../features/sendMail/sendMailSlice";
import db from "../config/firebase";

const SendEmail = () => {
	const [email, setEmail] = useState();
	const [subject, setSubject] = useState();
	const [message, setMessage] = useState();
	const dispatch = useDispatch();

	const closeCompose = () => {
		dispatch(setHideComposeState());
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);

		if (!errors.subject && !errors.email && !errors.message) {
			db.collection("emails")
				.add({
					email: data.email,
					subject: data.subject,
					message: data.message,
					timestamp: firebase.firestore.FieldValue.serverTimestamp(),
				})
				.then((docRef) => {
					console.log("Document written with ID: ", docRef.id);
				})
				.catch((error) => {
					console.error("Error adding document: ", error);
				});

			setEmail("");
			setSubject("");
			setMessage("");
			closeCompose();
		}
	};

	return (
		<SendMailWrapper>
			<div className='title'>
				<span>New Message</span>
				<div>
					<RemoveIcon className='icon' />

					<AddIcon className='icon' />
					<CloseIcon className='icon' onClick={closeCompose} />
				</div>
			</div>
			<form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
				<div className='emailInput-setup'>
					<span>Cc Bcs</span>
					<label htmlFor='email'> </label>
					{errors.email && <p className='error'>Enter valid email </p>}
					<input
						onChange={(event) => {
							setEmail(event.target.value);
						}}
						value={email}
						className='input'
						type='text'
						id='email'
						name='email'
						placeholder='To:'
						required
						{...register("email", {
							required: true,
							pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
						})}
					/>
				</div>

				<label htmlFor='subject: '></label>
				{errors.subject && <p className='error'>Subject is required</p>}
				<input
					onChange={(event) => {
						setSubject(event.target.value);
					}}
					value={subject}
					placeholder='Subject: '
					{...register("subject", { required: true })}
				/>

				{errors.message && <p className='error'>Message is required</p>}
				<textarea
					{...register("message", { required: true })}
					value={message}
					onChange={(event) => {
						setMessage(event.target.value);
					}}
					name='message'
					id='message'
					cols='30'
					rows='10'></textarea>

				<div className='buttons'>
					<button
						className='button create-button'
						type='submit'
						name='submit'
						id='submit-form'>
						Send
						<ArrowDropDownIcon className='icon' type='submit' />
					</button>
					<div className='icons'>
						<div className='left'>
							<FormatColorTextIcon className='icon' />
							<AttachFileIcon className='icon' />
							<InsertLinkIcon className='icon' />
							<InsertEmoticonIcon className='icon' />
							<CheckBoxOutlineBlankIcon className='icon' />
							<LocalMallIcon className='icon' />

							<CreateIcon className='icon' />
						</div>
						<div className='right'>
							<MoreVertIcon className='icon' />
							<DeleteIcon className='icon' />
						</div>
					</div>
				</div>
			</form>
		</SendMailWrapper>
	);
};

export default memo(SendEmail);
const SendMailWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 3rem;
	max-width: 32.75rem;
	width: 95%;
	min-height: 32.75rem;
	background: #ffffff 0% 0% no-repeat padding-box;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
	margin: auto;
	border-radius: 0.375rem;
	position: absolute;
	bottom: 0;
	margin: 0 auto;
	right: 50%;
	transform: translatex(50%);

	@media (max-width: 568px) {
		width: 90%;
		max-width: 90%;
		margin: 0 auto;
	}

	.title {
		background: #404040;
		color: white;
		padding: 1rem;
		display: flex;
		justify-content: space-between;

		.icon {
			margin-left: 1rem;
			cursor: pointer;
		}
	}

	form {
		flex: 1;
		width: 100%;
		min-height: 100%;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background: transparent;

		input {
			display: inline-flex;
			font-size: 1rem;
			height: 2.6em;
			justify-content: flex-start;
			line-height: normal;
			padding: 0.5rem;
			align-items: center;
			background-color: #fff;
			width: 100%;
			border: none;
			border-bottom: 1px solid #a6a6a6;
			margin-bottom: 1rem;
			transition: 0.3s;

			&:focus {
				outline: none;
				border-bottom: 1px solid #e0d4fd;
			}
		}

		textarea {
			flex: 1;
			height: 100%;
			font-size: 1rem;
			padding: 0.5rem;
			width: 100%;
			background: #ffffff;
			resize: none;
			border: none;
			outline: none;
		}
	}

	&:hover {
		border: 1px solid #043340;
	}

	.buttons {
		display: flex;
		align-items: center;

		button {
			display: flex;
			align-items: center;
			height: 2.5em;
			width: 8rem;
			color: white;
			font-size: 1rem;
			cursor: pointer;
			padding: 0 1rem;
			justify-content: space-around;
			background: #1a73e8;
			border: 1px solid #1a73e8;
			transition: 0.3s;
			border-radius: 0.3rem;
		}

		button:hover {
			background: rgba(26, 115, 232, 0.8);
		}
	}

	.icons {
		display: flex;
		flex: 1;
		align-items: center;
		justify-content: space-between;

		@media (max-width: 568px) {
			display: none;
		}

		.icon {
			font-size: 1.3rem;
			margin-left: 1rem;
			cursor: pointer;
		}

		.left {
			display: flex;
			align-items: center;
		}
	}

	.error {
		width: 100%;
		padding: 1rem;
		color: red;
		text-align: right;
	}

	.emailInput-setup {
		position: relative;

		span {
			position: absolute;
			left: 0;
			width: 100%;
			top: 8px;
			text-align: left;
			left: 86%;
			padding-right: 5px;
			font-size: 0.9rem;
			color: gray;
		}
	}
`;
