import { TransitionProps } from "@material-ui/core/transitions/transition"
import { StyledComponentProps } from "@material-ui/core/styles"

export interface IProps extends TransitionProps, StyledComponentProps {
	readonly open?: boolean
	readonly handleClose?: () => void
	readonly handleOpen?: () => void
}
