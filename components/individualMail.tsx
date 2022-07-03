import React from 'react'
import styled from 'styled-components'
import { IconButton } from '@material-ui/core'
import LabelRoundedIcon from '@material-ui/icons/LabelRounded'
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded'
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded'
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded'
import KeyboardRoundedIcon from '@material-ui/icons/KeyboardRounded'
import ReportRoundedIcon from '@material-ui/icons/ReportRounded'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArchiveIcon from '@material-ui/icons/Archive'
import DeleteIcon from '@material-ui/icons/Delete'
import MarkunreadRoundedIcon from '@material-ui/icons/MarkunreadRounded'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import ForwardIcon from '@material-ui/icons/Forward'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectEmail } from '../features/email/emailSlice'

const IndividualMail = () => {
	const router = useRouter()
	const email = useSelector(selectEmail)

	const handleClick = () => {
		router.push('/')
	}

	return (
		<IndividualMailWrapper>
			<div className="head">
				<div className="head-left">
					<IconButton onClick={handleClick}>
						<ArrowBackIcon className="icon-head" />
					</IconButton>
					<IconButton>
						<ArchiveIcon className="icon-head" />
					</IconButton>
					<IconButton>
						<ReportRoundedIcon className="icon-head" />
					</IconButton>
					<IconButton>
						<DeleteIcon className="icon-head" />
					</IconButton>
					<IconButton>
						<MarkunreadRoundedIcon className="icon-head" />
					</IconButton>

					<IconButton>
						<AddCircleIcon className="icon-head" />
					</IconButton>

					<IconButton>
						<WatchLaterIcon className="icon-head" />
					</IconButton>

					<IconButton>
						<LabelRoundedIcon className="icon-head" />
					</IconButton>
					<IconButton>
						<ForwardIcon className="icon-head" />
					</IconButton>

					<IconButton>
						<MoreVertRoundedIcon className="icon-head" />
					</IconButton>
				</div>

				<div className="head-right">
					<span> 1 - 2 of 234 </span>

					<IconButton>
						<ArrowBackIosRoundedIcon className="icon-head" />
					</IconButton>

					<IconButton>
						<ArrowForwardIosRoundedIcon className="icon-head" />
					</IconButton>

					<IconButton>
						<KeyboardRoundedIcon className="icon-head" />
					</IconButton>

					<IconButton>
						<ArrowDropDownRoundedIcon className="icon-head" />
					</IconButton>
				</div>
			</div>

			<div className="content">
				<div className="content-header head">
					<div className="first">
						<h2>{email?.email} </h2>
						<p className="subject">{email?.subject}</p>
					</div>
					<p>{email?.date}</p>
				</div>

				<div className="content-message">{email?.message}</div>
			</div>
		</IndividualMailWrapper>
	)
}

export default IndividualMail

const IndividualMailWrapper = styled.div`
	padding: 1rem 0;
	flex: 1;
	overflow: hidden !important;
	display: flex;
	flex-direction: column;

	.head {
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: space-between;
		margin: 0.2rem 1rem;
		padding-left: 0;
		border-bottom: 1px solid rgba(220, 227, 232);
		font-size: 0.9rem;
		min-width: 40rem;
		max-height: 40px;
		.icon-head {
			font-size: 1.2rem !important;
		}

		.head-left {
			min-width: 25rem;
		}
	}

	.head-right {
		@media (max-width: 768px) {
			display: none;
		}
	}

	.content {
		overflow: hidden !important;
		flex: 1;
		background: red;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		margin: 2rem;
		height: 100vh;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
		background-color: white;
		padding-bottom: 0.5rem;
	}

	.content-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid whitesmoke;
		margin: 1rem;
		padding-bottom: 1rem;

		@media (max-width: 991) {
			display: none !important;
		}
	}

	.content-message {
		line-height: 1.5rem;
		padding: 0 1rem;
	}

	.first {
		display: flex;
		align-items: center;
	}

	h2 {
		margin-right: 2.2rem;
		font-size: 1rem;
		min-width: 200px;
	}
`
