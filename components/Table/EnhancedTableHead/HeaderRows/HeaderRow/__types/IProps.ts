import { StyledComponentProps } from "@material-ui/core/styles"

import { IHead } from "../../../../__types/IHead"

export interface IProps extends StyledComponentProps, IHead {
	readonly onRequestSort: Function
	readonly orderBy: string
	readonly orderType: "asc" | "desc"
}
