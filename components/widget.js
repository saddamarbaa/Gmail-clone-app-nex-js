/** @format */

import React from "react";
import styled from "styled-components";
import ThumbUpRoundedIcon from "@material-ui/icons/ThumbUpRounded";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import EmojiObjectsRoundedIcon from "@material-ui/icons/EmojiObjectsRounded";
import MinimizeRoundedIcon from "@material-ui/icons/MinimizeRounded";
import { IconButton } from "@material-ui/core";

const Widget = () => {
	return (
		<WidgetWrapper>
			<IconButton className='icon-btn' style={{ color: "#FBBC05" }}>
				<EmojiObjectsRoundedIcon className='iconsi' />
			</IconButton>

			<IconButton className='icon-btn' style={{ color: "#1A73E8" }}>
				<AccountCircleRoundedIcon className='iconsi' />
			</IconButton>

			<IconButton className='icon-btn' style={{ color: "#EA4335" }}>
				<MinimizeRoundedIcon className='iconsi' />
			</IconButton>

			<IconButton className='icon-btn' style={{ color: "#34A853" }}>
				<AddRoundedIcon className='iconsi' />
			</IconButton>
		</WidgetWrapper>
	);
};

export default Widget;
const WidgetWrapper = styled.div`
	width: 5rem;

	@media (max-width: 568px) {
		width: 3rem;
	}

	.icon-btn {
		margin-bottom: 2rem;

		.iconsi {
			font-size: 2rem;

			@media (max-width: 568px) {
				font-size: 1.4rem;
			}
		}
	}
`;
