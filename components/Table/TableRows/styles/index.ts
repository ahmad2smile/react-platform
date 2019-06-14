import { createStyles, Theme } from "@material-ui/core"
import { StyleRules, StyleRulesCallback } from "@material-ui/core/styles/withStyles"

import { IProps } from "../__types/IProps"
import { IRow } from "../../__types/IRow"
import { IHead } from "../../__types/IHead"

const styles: StyleRulesCallback<Theme, IProps<IRow, IHead>> = (): StyleRules =>
	createStyles({
		root: {},
		tableCell: {
			textAlign: "center"
		}
	})

export default styles
