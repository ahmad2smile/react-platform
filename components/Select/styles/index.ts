import { Fonts, Theme } from "../../../theme"
import { inputBaseStyle } from "../../InputField/styles/index"

// tslint:disable-next-line:no-any
export const getSelectStyles = (
	error: string,
	touched: boolean,
	showDropDownArrowIcons: boolean,
	backgroundColor: string = Theme.colors.primary
) => ({
	control: (base: Object) => ({
		...base,
		...inputBaseStyle,
		minHeight: 52,
		backgroundColor: error && touched ? Theme.colors.accentLight : backgroundColor,
		borderColor: error && touched ? Theme.colors.danger : Theme.colors.primaryDark,
		":hover": {
			...(base as any)[":hover"],
			backgroundColor
		},
		"&:hover": {
			borderWidth: 2,
			backgroundColor
		},
		"&:focus": {
			borderWidth: 2,
			backgroundColor
		}
	}),
	checkBoxSelect: (base: Object) => ({
		...base,
		"&:hover": {
			borderWidth: 2,
			backgroundColor: Theme.colors.primary
		}
	}),
	singleValue: (base: Object) => ({
		...base,
		fontSize: Fonts.size.regular,
		fontFamily: Fonts.type.base,
		color: Theme.colors.info,
		overflow: "none"
	}),
	multiValue: (base: Object) => ({
		...base,
		backgroundColor: Theme.colors.primaryDark,
		height: 36,
		borderRadius: 4,
		"&:hover": {
			backgroundColor: Theme.colors.background
		}
	}),
	multiValueLabel: (base: Object) => ({
		...base,
		alignSelf: "center",
		fontSize: Fonts.size.regular,
		fontFamily: Fonts.type.base,
		color: Theme.colors.info
	}),
	multiValueRemove: (base: Object) => ({
		...base,
		"&:hover": {
			backgroundColor: Theme.colors.background
		},
		"& span": {
			"& svg": {
				display: "flex",
				fill: Theme.colors.icons,
				"& g": {
					"& circle": {
						fill: "ghostwhite"
					}
				}
			}
		}
	}),
	clearIndicator: (base: Object) => ({
		...base,
		"& svg": {
			color: Theme.colors.icons
		}
	}),
	menu: (base: Object) => ({
		...base,
		width: "96%",
		position: "absolute",
		zIndex: 1000
	}),
	menuList: (base: Object) => ({
		...base,
		"&:hover": {
			"&:focus": {
				backgroundColor
			}
		}
	}),
	dropdownIndicator: (base: Object) => ({
		...base,
		"& div": {
			"& svg": showDropDownArrowIcons
				? {
						width: 14,
						height: 10
				  }
				: {
						width: 18,
						height: 21
				  }
		}
	}),
	options: (base: Object) => ({
		...base,
		backgroundColor,
		"&:hover": {
			backgroundColor
		}
	})
})

export const dropDownArrowIconsStyles = {
	display: "grid"
}
