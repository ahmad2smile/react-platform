import { createStyles, Theme } from "@material-ui/core"
import { StyleRules, Styles } from "@material-ui/core/styles/withStyles"
import { IProps } from "../__types/IProps"

export const styles: Styles<Theme, IProps, ""> = (): StyleRules =>
	createStyles({
		toolTip: {
			display: "flex",
			justifyContent: "flex-end"
		},
		header: {
			background: "red"
		}
	})
