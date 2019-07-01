import { StyledComponentProps } from "react-jss"

export interface IProps extends StyledComponentProps {
	src: string
	alt: string
	ratio?: {
		w: number
		h: number
	}
}
