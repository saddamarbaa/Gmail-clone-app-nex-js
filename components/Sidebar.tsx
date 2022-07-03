import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import SidebarOption from './sidebarOption'
import InboxIcon from '@material-ui/icons/Inbox'
import StarIcon from '@material-ui/icons/Star'
import SendIcon from '@material-ui/icons/Send'
import SwapHorizontalCircleRoundedIcon from '@material-ui/icons/SwapHorizontalCircleRounded'
import InsertDriveFileRoundedIcon from '@material-ui/icons/InsertDriveFileRounded'
import MarkunreadRoundedIcon from '@material-ui/icons/MarkunreadRounded'
import LabelImportantRoundedIcon from '@material-ui/icons/LabelImportantRounded'
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded'
import Brightness5RoundedIcon from '@material-ui/icons/Brightness5Rounded'
import ReportRoundedIcon from '@material-ui/icons/ReportRounded'
import LabelRoundedIcon from '@material-ui/icons/LabelRounded'
import { Avatar, IconButton } from '@material-ui/core'
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded'
import AddRoundedIcon from '@material-ui/icons/AddRounded'
import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import { useDispatch } from 'react-redux'
import { setShowComposeState } from '../features/sendMail/sendMailSlice'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/user/userSlice'
import PersonIcon from '@material-ui/icons/Person'
import CallIcon from '@material-ui/icons/Call'
import FaceIcon from '@material-ui/icons/Face'
import { MessageType } from '../types'

type Props = {
	allEmails?: MessageType[]
}

const Sidebar = ({ allEmails }: Props) => {
	const [count, setCount] = useState(10)
	const user = useSelector(selectUser)
	const dispatch = useDispatch()

	useEffect(() => {
		if (allEmails && allEmails?.length > 0) {
			setCount(allEmails?.length)
		}
	}, [allEmails])

	const showCompose = () => {
		dispatch(setShowComposeState())
	}

	return (
		<SideBarWrapper>
			<>
				<Button
					className="compose-btn"
					variant="contained"
					onClick={showCompose}>
					<AddIcon className="icon" /> Compose
				</Button>

				<div className="hid-m">
					<SidebarOption Icon={AddCircleIcon} color=" #EA4335" addTrue={true} />
				</div>
				<SidebarOption
					Icon={InboxIcon}
					title="inbox"
					number={count}
					color=" #EA4335"
				/>
				<SidebarOption Icon={StarIcon} title="Started" />
				<SidebarOption Icon={SwapHorizontalCircleRoundedIcon} title="Snoozed" />
				<SidebarOption Icon={SendIcon} title="Send" />
				<SidebarOption Icon={StarIcon} title="Started" />
				<SidebarOption
					Icon={InsertDriveFileRoundedIcon}
					title="Drafts"
					number={count + 1}
					bold={true}
				/>
				<SidebarOption Icon={LabelImportantRoundedIcon} title="Important" />
				<SidebarOption Icon={MarkunreadRoundedIcon} title="All Mail" />
				<SidebarOption
					Icon={ReportRoundedIcon}
					title="Spam"
					number={count + 3}
					bold={true}
				/>
				<SidebarOption Icon={DeleteRoundedIcon} title="Trash" />
				<SidebarOption Icon={LabelRoundedIcon} title="Categories" bold={true} />
				<SidebarOption Icon={Brightness5RoundedIcon} title="Mange Label" />
				<div className="profile">
					<div className="hans">Hangouts</div>

					<div className="profile-content">
						<div>
							<div className="avatar">
								<IconButton className="avatar icons">
									<Avatar src={user?.photoURL} />
								</IconButton>
								<span className="hid-s"> {user?.displayName}</span>
								<ArrowDropDownRoundedIcon className="hid-s" />
								<FiberManualRecordRoundedIcon
									className="absolute-position"
									style={{ color: '#35AC19' }}
								/>
							</div>
						</div>
						<IconButton className="hid-s">
							<AddRoundedIcon />
						</IconButton>
					</div>
				</div>
				<div className="chat-content hid-s">
					<p>No recent chat</p>
					<p className="second">Start new conversations</p>
				</div>
				<div className="calls-content hid-s">
					<IconButton className="is-icon">
						<PersonIcon />
					</IconButton>
					<IconButton className="is-icon">
						<FaceIcon />
					</IconButton>
					<IconButton className="is-icon">
						<CallIcon />
					</IconButton>
				</div>
			</>
		</SideBarWrapper>
	)
}

export default Sidebar

const SideBarWrapper = styled.div`
	padding: 1rem 0.1rem;
	width: 14rem;

	&:hover {
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
		background-color: white;
	}

	@media (max-width: 568px) {
		width: 3rem;
	}

	.compose-btn {
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
		background-color: white;
		margin: 1rem;
		margin-top: 0;
		padding: 1rem 1.3rem;
		margin-bottom: 1.5rem;
		font-weight: bold;
		border-radius: 24px;
		font-size: 1rem;
		color: #3c4043;
		height: 48px;
		min-width: 56px;
		text-transform: lowercase;

		@media (max-width: 568px) {
			display: none;
		}

		&:hover {
			box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
			background-color: white;
		}

		.icon {
			color: red;
			margin-right: 5px;
			font-size: 2.3rem;
		}
	}

	.profile {
		.hans {
			margin-top: 1.2rem;
			padding: 0 0.8rem;

			@media (max-width: 568px) {
				display: none;
			}
		}

		.profile-content {
			display: flex;
			align-items: center;
			justify-content: space-between;
			cursor: pointer;

			.avatar {
				display: flex;
				align-items: center;
				font-size: 0.9rem;
				position: relative;

				.avatar.icons {
					font-size: 1rem;
					object-fit: contain;

					@media (max-width: 568px) {
						margin-top: 1.2rem;
						width: 1rem;
						height: 1rem;
						object-fit: contain;
					}
				}
			}

			.absolute-position {
				position: absolute;
				bottom: 0;
				left: 30%;

				@media (max-width: 568px) {
					bottom: -20px;
					left: 40%;
					font-size: 1.5rem;
				}
			}
		}
	}

	.hid-s {
		@media (max-width: 568px) {
			display: none;
		}
	}

	.hid-m {
		@media (min-width: 568px) {
			display: none;
		}
	}

	.calls-content {
		margin-top: 1rem;
		padding: 1rem;
		padding-top: 0.5rem;
		border-top: 1px solid rgba(220, 227, 232);

		.is-icon {
			font-size: 0.5rem !important;
		}
	}

	.chat-content {
		margin-top: 1rem;
		font-size: 0.9rem;
		p {
			padding: 0.4rem 1rem;
		}
		p.second {
			color: blue;
		}
	}
`
