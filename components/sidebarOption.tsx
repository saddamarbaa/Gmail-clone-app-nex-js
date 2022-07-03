import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { SvgIconTypeMap } from '@material-ui/core'

import { setShowComposeState } from '../features/sendMail/sendMailSlice'
import { OverridableComponent } from '@material-ui/core/OverridableComponent'

type Props = {
	Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>
	title?: string
	number?: number
	color?: string
	bold?: boolean
	addTrue?: boolean
}
const SidebarOption = ({
	Icon,
	title,
	number,
	color,
	bold,
	addTrue,
}: Props) => {
	const dispatch = useDispatch()
	const showCompose = () => {
		dispatch(setShowComposeState())
	}

	return (
		<SidebarOptionWrapper>
			{color && addTrue && (
				<div
					className="content"
					style={{ color: '#ea4335', background: 'RGB(234, 67, 53,.07)' }}>
					<div>
						<Icon className="icon" onClick={showCompose} />
						<span className="hid-s">{title}</span>
					</div>
					<div className="hid-s"> {number}</div>
				</div>
			)}
			<>
				{color && !addTrue ? (
					<div
						className="content"
						style={{ color: '#ea4335', background: 'RGB(234, 67, 53,.07)' }}>
						<div>
							<Icon className="icon" />
							<span className="hid-s">{title}</span>
						</div>
						<div className="hid-s"> {number}</div>
					</div>
				) : null}

				{!color ? (
					<div className="content">
						<div
							style={{
								fontWeight: bold ? 'bold' : '',
							}}>
							<Icon className="icon" />
							<span className="hid-s">{title}</span>
						</div>
						<div className="hid-s"> {number}</div>
					</div>
				) : null}
			</>
		</SidebarOptionWrapper>
	)
}

export default SidebarOption

const SidebarOptionWrapper = styled.div`
	.content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.5rem 1rem;
		transition: 0.3s;
		border-radius: 4px;
		border-top-right-radius: 1.2rem;
		border-bottom-right-radius: 1.3rem;
		color: #333;

		@media (max-width: 568px) {
			padding: 0;
			margin-bottom: 1rem;
			cursor: pointer;
		}

		div {
			display: flex;
			align-items: center;
		}

		@media (min-width: 568px) {
			&:hover {
				background-color: rgba(220, 227, 232);
			}
		}

		.icon {
			margin-right: 0.8rem;
			font-size: 1.4rem;
		}

		.hid-s {
			@media (max-width: 568px) {
				display: none;
			}
		}
	}
`
