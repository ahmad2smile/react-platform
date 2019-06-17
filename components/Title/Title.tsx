import * as React from "react"

import { IProps } from "./__types/IProps"

const Title = ({ title, children }: IProps): JSX.Element => {
	React.useEffect(() => {
		document.title = title
	}, [title])

	return <>{children}</>
}

export default React.memo(Title)
