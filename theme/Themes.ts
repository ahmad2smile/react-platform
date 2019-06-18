import { Theme as MaterialThemeType } from "@material-ui/core"
import { createMuiTheme } from "@material-ui/core/styles"

import { Colors, DarkColors } from "./Colors"
import { Sizes } from "./Sizes"

// tslint:disable-next-line:no-let
export let Theme: ITheme = {
	sizes: Sizes,
	colors: Colors
}

export const MuiTheme: MaterialThemeType = createMuiTheme({
	palette: {
		background: {
			default: Theme.colors.background
		},
		primary: {
			main: Theme.colors.primary,
			light: Theme.colors.primaryLight
		},
		secondary: {
			main: Theme.colors.secondary
		},
		text: {
			primary: Theme.colors.info
		},
		grey: {
			"100": Theme.colors.gray
		}
	}
})

// tslint:disable-next-line:no-let
export let DarkTheme: ITheme = {
	...Theme,
	colors: DarkColors
}

export function overrideTheme(newTheme: IThemeColors, newDarkTheme: IThemeColors): void {
	Theme = { ...Theme, ...newTheme }
	DarkTheme = { ...DarkTheme, ...newDarkTheme }
}
