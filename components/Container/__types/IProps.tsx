import { StyledComponentProps } from "react-jss"

export interface IProps extends StyledComponentProps {
	readonly children: React.ReactNode
	readonly fullTablet?: boolean
}
