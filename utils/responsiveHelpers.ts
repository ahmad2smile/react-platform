import { Styles } from "react-jss"

export function breakPointXSmallUp(styles: Styles): Styles {
	return {
		"@media (min-width: 420px)": {
			...styles
		}
	}
}

export function breakPointSmallUp(styles: Styles): Styles {
	return {
		"@media (min-width: 560px)": {
			...styles
		}
	}
}

export function breakPointMediumUp(styles: Styles): Styles {
	return {
		"@media (min-width: 800px)": {
			...styles
		}
	}
}

export function breakPointLargeUp(styles: Styles): Styles {
	return {
		"@media (min-width: 1100px)": {
			...styles
		}
	}
}

export function breakPointXLargeUp(styles: Styles): Styles {
	return {
		"@media (min-width: 1600px)": {
			...styles
		}
	}
}
