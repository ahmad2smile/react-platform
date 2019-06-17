import * as React from "react"
import { Route, Redirect } from "react-router-dom"

import { IProps } from "./__types/IProps"

const PublicRoute = ({ isUnAuth, component: Component, ...rest }: IProps) => {
	console.log("TCL: -------------------------------------")
	console.log("TCL: PublicRoute -> isUnAuth", isUnAuth)
	console.log("TCL: -------------------------------------")

	return (
		<Route
			render={
				// tslint:disable-next-line:jsx-no-lambda
				({ location }) =>
					isUnAuth ? (
						<Component />
					) : (
						<Redirect
							to={{
								pathname: "/404",
								state: { from: location }
							}}
						/>
					)
				// tslint:disable-next-line:jsx-curly-spacing
			}
			{...rest}
		/>
	)
}

export default PublicRoute
