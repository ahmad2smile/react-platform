import { Styles } from "react-jss"

import { Sizes } from "../../../theme"

import { IProps } from "../__types/IProps"
import { breakPointLargeUp } from "../../../utils/responsiveHelpers"

export const styles: Styles<undefined, IProps> = {
	container: {
		display: "flex",
		height: "100%",
		margin: "0 auto",
		maxWidth: "90%"
	},
	...breakPointLargeUp({
		container: {
			maxWidth: Sizes.container
		}
	})
}
