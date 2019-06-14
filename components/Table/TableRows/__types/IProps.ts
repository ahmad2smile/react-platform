import { StyledComponentProps } from "@material-ui/core/styles"

import { IRow } from "../../__types/IRow"
import { IHead } from "../../__types/IHead"

export interface IProps<TRow extends IRow, THead extends IHead> extends StyledComponentProps {
	readonly rows: ReadonlyArray<TRow>
	readonly handleSelectClick?: React.ChangeEventHandler
	readonly orderBy: string
	readonly orderType: "asc" | "desc"
	readonly page: number
	readonly rowsPerPage: number
	readonly selected: ReadonlyArray<number>
	readonly columns: ReadonlyArray<THead>
}
