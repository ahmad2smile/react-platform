import { NavbarHeight } from "../__types/IValues"
import { IProps } from "../__types/IProps"
import { Styles } from "react-jss"

export const styles: Styles | any = {
	container: {},
	navContainer: {
		width: "100%",
		height: ({ height }: IProps) => height || (NavbarHeight as any),
		backgroundColor: "white",
		position: "fixed",
		top: 0,
		zIndex: 1
	},
	contentContainer: {
		marginTop: ({ height }: IProps) => height || NavbarHeight
	}
}
