import { Styles } from "react-jss"

import { breakPointSmallUp } from "../../../utils/responsiveHelpers"

import { IProps } from "../__types/IProps"

export const styles: Styles | any = {
	container: {
		flexBasis: "100%",
		width: "100%",
		paddingTop: ({ ratio }: IProps) => (ratio ? (ratio.w / ratio.h) * 100 : "100%"),
		position: "relative"
	},
	...breakPointSmallUp({
		container: {
			flexBasis: "50%"
		}
	}),
	content: {
		position: "absolute",
		top: 0,
		left: 0,
		bottom: 0,
		right: 0
	}
}
