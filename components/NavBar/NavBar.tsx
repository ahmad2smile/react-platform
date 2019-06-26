import React from "react"
import injectSheet from "react-jss"

import { IProps } from "./__types/IProps"
import { NavBarPosition } from "../../models/NavBarPosition";

import { styles } from "./styles/"

const NavBar = ({ navItems, children, classes }: IProps) => (
	<div className={classes.container}>
		<div className={classes.navContainer}>{navItems}</div>
		<div className={classes.contentContainer}>{children}</div>
	</div>
)

NavBar.defaultProps = {
	position: NavBarPosition.Top
}

export default injectSheet(styles)(NavBar)
