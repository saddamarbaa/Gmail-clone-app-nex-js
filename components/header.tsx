import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import Image from 'next/image'
import BorderClearIcon from '@material-ui/icons/BorderClear'
import HelpIcon from '@material-ui/icons/Help'
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh'
import { Avatar, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import SendIcon from '@material-ui/icons/Send'
import { useRouter } from 'next/router'

import { auth } from '../config/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { setLogOutState, selectUser } from '../features/user/userSlice'

const Header = () => {
	const user = useSelector(selectUser)
	const dispatch = useDispatch()
	const router = useRouter()

	const userSignedOutHandler = () => {
		if (user) {
			auth
				.signOut()
				.then(() => {})
				.catch((error: any) => {
					const errorCode = error?.code
					const errorMessage = error?.message
					alert(errorMessage)
				})

			dispatch(setLogOutState())
			router.replace('/login')
		}
	}

	return (
		<HeaderWrapper style={{ position: 'sticky' }}>
			<nav>
				<div className="header__left">
					<IconButton className="hid-s">
						<MenuIcon />
					</IconButton>

					<div
						className="logo"
						style={{
							position: 'relative',
							cursor: 'pointer',
						}}>
						<Image
							className="logo-img"
							src="/images/logo_gmail.png"
							alt="logo"
							layout="fill"
							objectFit="contain"
						/>
					</div>
				</div>

				<div className="header__middle">
					<IconButton>
						<SearchIcon />
					</IconButton>

					<form autoComplete="off">
						<label htmlFor="search"></label>
						<input
							type="email"
							id="search"
							name="search"
							placeholder="Search mail"
							autoComplete="search"
							minLength={2}
						/>
					</form>
					<IconButton>
						<SendIcon />
					</IconButton>
				</div>
				<div className="header__right">
					<IconButton className="icons">
						<BrightnessHighIcon />
					</IconButton>

					<IconButton className="icons">
						<HelpIcon />
					</IconButton>

					<IconButton className="icons">
						<BorderClearIcon />
					</IconButton>

					<IconButton className="avatar icons" onClick={userSignedOutHandler}>
						<Avatar src={user?.photoURL} />
					</IconButton>
				</div>
			</nav>
		</HeaderWrapper>
	)
}

export default Header

const HeaderWrapper = styled.header`
	height: 4rem;
	position: sticky;
	top: 0;
	left: 0;
	right: 0;
	display: flex;
	align-items: center;
	padding: 0 1rem;
	border-bottom: 1px solid rgba(220, 227, 232);
	position: sticky !important;
	position: -webkit-sticky;
	top: 0; /* required */
	z-index: 1000;

	nav {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.header__left {
			display: flex;
			align-items: center;
			.logo {
				width: 5.62rem;
				height: 4rem;
				margin: 0 0.5rem;
			}

			.hid-s {
				@media (max-width: 568px) {
					display: none;
				}
			}
		}

		.header__middle {
			flex-grow: 1;
			max-width: 37rem;
			display: flex;
			align-items: center;
			margin: 0 rem;
			background-color: rgba(220, 227, 232);
			color: gray;
			height: 3rem;
			padding: 0 0.8rem;
			border-radius: 6px;
			transition: 0.3s;

			&:hover,
			&:focus {
				background-color: white;
				box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
				background-color: white;
			}

			form {
				display: flex;
				width: 100%;
				input {
					border: none;
					flex: 1;
					outline: none;
					font-weight: 600;
					background: transparent;
					color: #222;
				}
				button {
				}
			}

			@media (max-width: 568px) {
				display: none;
			}
		}

		.header__right {
			display: flex;
			align-items: center;

			@media (min-width: 768px) {
				padding-right: 2rem;
			}

			.icons {
				@media (max-width: 768px) {
					display: none;
				}
			}

			.avatar.icons {
				width: 2rem;
				object-fit: contain;
				margin-right: 0;
				@media (max-width: 768px) {
					display: block;

					width: 100%;
					height: 100%;
				}
			}
		}
	}
`
