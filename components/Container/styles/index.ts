import { StyleCreator } from "react-jss"

import { IProps } from "../__types/IProps"

export const styles: StyleCreator<undefined, ITheme, IProps> = (theme: ITheme) => ({
	container: {
		width: theme.sizes.container
	}
})
