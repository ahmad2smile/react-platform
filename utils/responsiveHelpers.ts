import { Styles } from "react-jss"

export function breakPointXSmall(styles: Styles): Styles {
	return {
		"@media (max-width: 420px)": {
			...styles
		}
	}
}

export function breakPointSmall(styles: Styles): Styles {
	return {
		"@media (max-width: 560px)": {
			...styles
		}
	}
}

export function breakPointMedium(styles: Styles): Styles {
	return {
		"@media (max-width: 800px)": {
			...styles
		}
	}
}

export function breakPointLarge(styles: Styles): Styles {
	return {
		"@media (max-width: 1000px)": {
			...styles
		}
	}
}

export function breakPointXLarge(styles: Styles): Styles {
	return {
		"@media (max-width: 1200px)": {
			...styles
		}
	}
}
