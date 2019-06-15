import * as React from "react"
import useSheet from "react-jss"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

import MainRoute from "./navigation/routes"

import { persistor, store } from "./appstate/store"

import styles from "./App.styles"
import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles"
import { ThemeProvider } from "react-jss"
import { MuiTheme, Theme } from "./theme"

const onBeforeLift: Function = (): void => {
	// Anything that needs to be done before App ready (by redux-persist)
}

const App: React.SFC = (): JSX.Element => (
	<Provider store={store}>
		<PersistGate onBeforeLift={onBeforeLift} persistor={persistor}>
			<MuiThemeProvider theme={MuiTheme}>
				<ThemeProvider theme={Theme}>
					<MainRoute />
				</ThemeProvider>
			</MuiThemeProvider>
		</PersistGate>
	</Provider>
)

export default useSheet(styles)(App)
