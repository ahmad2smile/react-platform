import * as React from "react"
import injectSheet from "react-jss"

import { IProps } from "./__types/IProps"

import { styles } from "./styles"

const Container = ({ children, className, classes }: IProps) => (
	<div className={`${classes.container} ${className}`}>{children}</div>
)

export default injectSheet(styles)(Container)
