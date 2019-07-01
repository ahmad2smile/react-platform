import { Styles } from "react-jss"
import { breakPointSmallUp } from "../../../utils/responsiveHelpers"

export const styles: Styles = {
	container: {
		flexBasis: "100%",
		width: "100%",
		paddingTop: "100%",
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
