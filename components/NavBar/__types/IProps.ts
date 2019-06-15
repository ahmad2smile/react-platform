import { StyledComponentProps } from "react-jss"

export interface IProps extends StyledComponentProps {
	height?: React.ReactNode
	navItems: React.ReactNode
	children: React.ReactNode
}
