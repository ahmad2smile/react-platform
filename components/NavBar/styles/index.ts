import { Styles } from "react-jss"

import { IProps } from "../__types/IProps"
import { NavbarHeight } from "../__types/IValues"
import { NavBarPosition } from "./../../../models/NavBarPosition"

export const styles: Styles | any = {
	container: {},
	navContainer: {
		display: "flex",
		width: "100%",
		height: ({ height }: IProps) => height || (NavbarHeight as any),
		backgroundColor: "white",
		position: "fixed",
		top: ({ position }: IProps) => position === NavBarPosition.Top && 0,
		bottom: ({ position }: IProps) => position === NavBarPosition.Bottom && 0,
		left: ({ position }: IProps) => position === NavBarPosition.Left && 0,
		right: ({ position }: IProps) => position === NavBarPosition.Right && 0,
		zIndex: 1
	},
	contentContainer: {
		marginTop: ({ height }: IProps) => height || NavbarHeight
	}
}
