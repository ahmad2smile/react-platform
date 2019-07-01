import { StyledComponentProps } from "react-jss"

export interface IProps extends StyledComponentProps {
	children: React.ReactNode
	ratio?: {
		w: number
		h: number
	}
}
