import * as React from "react"
import injectSheet from "react-jss"

import { IProps } from "./__types/IProps"

import { styles } from "./styles"

const Image = ({ src, alt, classes }: IProps) => (
	<div className={classes.container}>
		<img src={src} alt={alt} className={classes.img} />
	</div>
)

export default injectSheet(styles)(Image)
