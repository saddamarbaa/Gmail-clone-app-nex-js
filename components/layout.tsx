import React from 'react'
import styled from 'styled-components'

import Header from './header'
import SendEmail from './sendMail'
import { useSelector } from 'react-redux'
import { selectSendMail } from '../features/sendMail/sendMailSlice'

const Layout = (props: { children: React.ReactNode }) => {
	const showCompose = useSelector(selectSendMail)

	return (
		<AppWrapper>
			<Header />
			<main className="app-bod">{props.children}</main>
			{showCompose && <SendEmail />}
		</AppWrapper>
	)
}

export default Layout

const AppWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100vw;
	min-height: 100vh;
`
