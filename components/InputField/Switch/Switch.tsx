import * as React from "react"
import Switch from "@material-ui/core/Switch"
import { withStyles } from "@material-ui/core"

import { styles } from "./styles"

import { IProps } from "./__types/IProps"
import { IState } from "./__types/IState"

class Checkbox extends React.Component<IProps, IState> {
	public constructor(props: IProps) {
		super(props)

		const { checked } = props

		this.state = {
			toggle: checked
		}

		this.toggle = this.toggle.bind(this)
	}

	public toggle(e: React.ChangeEvent) {
		const { onChange } = this.props
		const { toggle } = this.state

		this.setState({ toggle: !toggle })

		onChange(e)
	}

	public render() {
		const { onBlur, classes } = this.props
		const { toggle } = this.state

		return (
			<div className={classes.container}>
				<Switch
					classes={{
						checked: classes.checked
					}}
					onBlur={onBlur}
					checked={toggle}
					onChange={this.toggle}
					color="default"
				/>
			</div>
		)
	}
}
export default withStyles(styles)(Checkbox)
