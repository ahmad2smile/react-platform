import { StyledComponentProps } from "react-jss"

import { NavBarPosition } from './../../../models/NavBarPosition';

export interface IProps extends StyledComponentProps {
	position?: NavBarPosition
	height?: React.ReactNode
	navItems: React.ReactNode
	children: React.ReactNode
}
