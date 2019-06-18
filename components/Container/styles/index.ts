import { Styles } from "react-jss"

import { Sizes } from "../../../theme"

import { IProps } from "../__types/IProps"

export const styles: Styles<undefined, IProps> = {
	container: {
		display: "flex",
		height: "100%",
		margin: "0 auto",
		width: Sizes.container
	}
}
