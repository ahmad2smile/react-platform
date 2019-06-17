import * as React from "react"
import { RouteProps } from "react-router-dom"

export interface IProps extends RouteProps {
	readonly isAuth: boolean
	readonly title?: string
	readonly component: React.SFC
}
