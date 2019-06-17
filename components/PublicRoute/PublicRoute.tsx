import * as React from "react"
import { Route, Redirect } from "react-router-dom"

import Title from "../Title/Title"

import { IProps } from "./__types/IProps"

const PublicRoute = ({ isUnAuth, title, component: Component, ...rest }: IProps) => (
	<Route
		render={
			// tslint:disable-next-line:jsx-no-lambda
			({ location }) =>
				isUnAuth ? (
					<Title title={title}>
						<Component />
					</Title>
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

export default PublicRoute
