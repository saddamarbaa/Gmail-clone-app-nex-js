/** @format */

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import RefreshRoundedIcon from "@material-ui/icons/RefreshRounded";
import MoreVertRoundedIcon from "@material-ui/icons/MoreVertRounded";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import CropLandscapeRoundedIcon from "@material-ui/icons/CropLandscapeRounded";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import KeyboardRoundedIcon from "@material-ui/icons/KeyboardRounded";
import InboxIcon from "@material-ui/icons/Inbox";
import GroupRoundedIcon from "@material-ui/icons/GroupRounded";
import LocalOfferRoundedIcon from "@material-ui/icons/LocalOfferRounded";
import Email from "./email";
import db from "../config/firebase";
import { useRouter } from "next/router";
import Fade from "react-reveal/Fade";

import { useDispatch } from "react-redux";

const Feed = (props) => {
	const { allEmails } = props;

	const dispatch = useDispatch();

	return (
		<FeedWrapper>
			<div className='head'>
				<div className='head-left'>
					<IconButton>
						<CropLandscapeRoundedIcon className='icon-head' />
					</IconButton>

					<IconButton>
						<RefreshRoundedIcon className='icon-head' />
					</IconButton>

					<IconButton>
						<ArrowDropDownRoundedIcon className='icon-head' />
					</IconButton>

					<IconButton>
						<MoreVertRoundedIcon className='icon-head' />
					</IconButton>
				</div>
				<div className='head-right'>
					<span> 1 - 2 of 234 </span>

					<IconButton>
						<ArrowBackIosRoundedIcon className='icon-head' />
					</IconButton>

					<IconButton>
						<ArrowForwardIosRoundedIcon className='icon-head' />
					</IconButton>

					<IconButton>
						<KeyboardRoundedIcon className='icon-head' />
					</IconButton>

					<IconButton>
						<ArrowDropDownRoundedIcon className='icon-head' />
					</IconButton>
				</div>
			</div>

			<div className='content-heading'>
				<div className='content-heading__primary heading'>
					<IconButton>
						<InboxIcon className='icon-heading' />
					</IconButton>
					Primary
				</div>
				<div className='content-heading__social heading'>
					<IconButton>
						<GroupRoundedIcon className='icon-heading' />
					</IconButton>
					Social
					<p>20 new</p>
				</div>
				<div className='content-heading__promotion heading'>
					<IconButton>
						<LocalOfferRoundedIcon className='icon-heading' />
					</IconButton>
					Promotion
					<p>50 new</p>
				</div>
			</div>

			{/* Emails */}
			{allEmails?.map(({ id, data }) => {
				return (
					<Fade bottom key={id}>
						<Email
							subject={data.subject}
							date={new Date(data.timestamp?.toDate()).toUTCString()}
							name={data?.email}
							message={data?.message}
						/>
					</Fade>
				);
			})}

			<Fade bottom>
				<Email
					date='Tue, 10 Aug 2021 14:15:47 GMT'
					background={true}
					name='Saddam Arbaa'
					message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quos officiis repellendus quibusdam dolores, quo quas maxime ab aspernatur, at recusandae ad, nisi sequi facilis voluptates vitae ex beatae odit.'
				/>
			</Fade>
			<Fade bottom>
				<Email
					date='Tue, 10 Aug 2021 14:15:47 GMT'
					name='Saddam Arbaa'
					message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quos officiis repellendus quibusdam dolores, quo quas maxime ab aspernatur, at recusandae ad, nisi sequi facilis voluptates vitae ex beatae odit.'
				/>
			</Fade>

			<Fade bottom>
				<Email
					date='Tue, 10 Aug 2021 14:15:47 GMT'
					name='Saddam Arbaa'
					message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quos officiis repellendus quibusdam dolores, quo quas maxime ab aspernatur, at recusandae ad, nisi sequi facilis voluptates vitae ex beatae odit.'
				/>
			</Fade>

			<Fade bottom>
				<Email
					background={true}
					date='Tue, 10 Aug 2021 14:15:47 GMT'
					name='Saddam Arbaa'
					message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quos officiis repellendus quibusdam dolores, quo quas maxime ab aspernatur, at recusandae ad, nisi sequi facilis voluptates vitae ex beatae odit.'
				/>
			</Fade>

			<Fade bottom>
				<Email
					date='Tue, 10 Aug 2021 14:15:47 GMT'
					name='Saddam Arbaa'
					message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quos officiis repellendus quibusdam dolores, quo quas maxime ab aspernatur, at recusandae ad, nisi sequi facilis voluptates vitae ex beatae odit.'
				/>
			</Fade>

			<Fade bottom>
				<Email
					background={true}
					date='Tue, 10 Aug 2021 14:15:47 GMT'
					name='Saddam Arbaa'
					message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quos officiis repellendus quibusdam dolores, quo quas maxime ab aspernatur, at recusandae ad, nisi sequi facilis voluptates vitae ex beatae odit.'
				/>
			</Fade>

			<Fade bottom>
				<Email
					date='Tue, 10 Aug 2021 14:15:47 GMT'
					name='Saddam Arbaa'
					message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quos officiis repellendus quibusdam dolores, quo quas maxime ab aspernatur, at recusandae ad, nisi sequi facilis voluptates vitae ex beatae odit.'
				/>
			</Fade>

			<Fade bottom>
				<Email
					date='Tue, 10 Aug 2021 14:15:47 GMT'
					name='Saddam Arbaa'
					message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quos officiis repellendus quibusdam dolores, quo quas maxime ab aspernatur, at recusandae ad, nisi sequi facilis voluptates vitae ex beatae odit.'
				/>
			</Fade>

			<Fade bottom>
				<Email
					background={true}
					date='Tue, 10 Aug 2021 14:15:47 GMT'
					name='Saddam Arbaa'
					message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quos officiis repellendus quibusdam dolores, quo quas maxime ab aspernatur, at recusandae ad, nisi sequi facilis voluptates vitae ex beatae odit.'
				/>
			</Fade>
		</FeedWrapper>
	);
};

export default Feed;
const FeedWrapper = styled.div`
	padding: 1rem 0;
	flex: 1;
	max-height: 100vh;
	overflow-x: hidden !important;

	.head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.2rem 1rem;
		padding-left: 0;
		border-bottom: 1px solid rgba(220, 227, 232);
		font-size: 0.9rem;
		min-width: 33rem;

		.icon-head {
			font-size: 1.2rem !important;
		}
	}

	.content-heading {
		@media (max-width: 568px) {
			display: none;
		}

		display: flex;
		align-items: center;
		justify-content: space-between;

		.heading {
			transition: 0.3s;
			width: 16rem;
			display: flex;
			align-items: center;
			margin-right: 0 1rem;

			p {
				border: 0.1px solid #188038;
				margin-left: 2rem;
				padding: 4px 7px;
				border-radius: 3px;
				min-width: 4.3rem;
				max-height: 2.2rem;
			}

			&:hover {
				background: rgba(220, 227, 232);
			}
		}

		.content-heading__promotion {
			color: #188038;
			border-bottom: 2px solid #188038;

			.icon-heading {
				color: #188038;
			}

			p {
				border: 0.1px solid #188038;
			}
		}

		.content-heading__social {
			color: #1a73e8;
			border-bottom: 2px solid #1a73e8;

			.icon-heading {
				color: #1a73e8;
			}

			p {
				border: 0.1px solid #1a73e8;
			}
		}

		.content-heading__primary {
			color: #ea4335;
			border-bottom: 2px solid #ea4335;

			.icon-heading {
				color: #ea4335;
			}
		}
	}
`;

// export function getStaticProps(context) {
// 	let setAllEmails = [];
// 	db.collection("emails")
// 		.orderBy("timestamp", "desc")
// 		.limit(100)
// 		.onSnapshot((snapshot) => {
// 			setAllEmails.push(
// 				snapshot.docs.map((doc) => {
// 					console.log("doc.data()", db);
// 					return {
// 						data: doc.data(),
// 						id: doc.id,
// 					};
// 				}),
// 			);
// 		});

// 	console.log("db", db);

// 	return {
// 		props: setAllEmails,
// 	};
// }
