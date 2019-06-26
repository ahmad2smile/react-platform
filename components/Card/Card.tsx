import * as React from "react"
import injectSheet from "react-jss"

import { IProps } from "./__types/IProps"

import { styles } from "./styles"

const Card = ({ children, classes }: IProps) => (
	<div className={classes.container}>
		{children}
	</div>
)

export default injectSheet(styles)(Card)
