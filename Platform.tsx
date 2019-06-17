import * as React from "react"
import useSheet, { ThemeProvider } from "react-jss"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles"

import App from "./App/App"

import { persistor, store } from "./appstate/store"

import { MuiTheme, Theme } from "./theme"

import styles from "./Platform.styles"

const onBeforeLift: Function = (): void => {
	// Anything that needs to be done before Platform ready (by redux-persist)
}

const Platform: React.SFC = (): JSX.Element => (
	<Provider store={store}>
		<PersistGate onBeforeLift={onBeforeLift} persistor={persistor}>
			<MuiThemeProvider theme={MuiTheme}>
				<ThemeProvider theme={Theme}>
					<App />
				</ThemeProvider>
			</MuiThemeProvider>
		</PersistGate>
	</Provider>
)

export default useSheet(styles)(Platform)
