import { Styles } from "react-jss"

import { IProps } from "../__types/IProps"

export const styles: Styles | any = {
	container: {
		flexBasis: "100%",
		width: "100%",
		paddingTop: ({ ratio }: IProps) => (ratio ? `${ratio.h / ratio.w}%` : "100%"),
		position: "relative"
	},
	img: {
		position: "absolute",
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		height: "100%",
		width: "100%"
	}
}
