import { Styles } from "react-jss"

import { Sizes } from "../../../theme"

import { IProps } from "../__types/IProps"
import { breakPointLargeUp } from "../../../utils/responsiveHelpers"

export const styles: Styles<undefined, IProps> = {
	container: {
		display: "flex",
		flexGrow: 1,
		flexWrap: "wrap",
		margin: "0 auto",
		width: ({ fullTablet }: IProps) => (fullTablet ? "100%" : "90%")
	},
	...breakPointLargeUp({
		container: {
			maxWidth: Sizes.container
		}
	})
}
