import { ISize, IType, IIconSize } from "./types/Fonts.types"
import { Theme } from "./Themes"

const type: IType = {
	base: "Roboto",
	classic: "Lora"
}

enum gridSize {
	one = 1,
	two,
	three,
	four,
	five,
	six,
	seven,
	eight,
	nine,
	ten,
	eleven,
	twelve
}

const iconSize: IIconSize = {
	medium: 30,
	small: 18,
	mini: 16,
	width: 20,
	height: 23
}

const size: ISize = {
	h1: "1.875rem",
	h2: "1.625rem",
	h3: "1.25rem",
	h4: "1.125rem",
	h5: "1rem",
	caption: "0.875rem",
	regular: "0.875rem",
	label: "0.75rem"
}

const h1Styles: React.CSSProperties = {
	fontFamily: type.classic,
	fontWeight: "lighter",
	fontSize: size.h1,
	color: "#1B1E24"
}

const h2Styles: React.CSSProperties = {
	fontFamily: type.base,
	fontStyle: "normal",
	fontWeight: "bold",
	lineHeight: "normal",
	fontSize: size.h2,
	letterSpacing: "0.2",
	color: "#1B1E24"
}

const h3Styles: React.CSSProperties = {
	fontFamily: type.base,
	fontStyle: "normal",
	fontWeight: "bold",
	lineHeight: "normal",
	fontSize: size.h3,
	letterSpacing: "0.2",
	color: "#1B1E24"
}

const h4Styles: React.CSSProperties = {
	fontFamily: type.base,
	fontStyle: "normal",
	fontWeight: "bold",
	lineHeight: "normal",
	fontSize: size.h4,
	letterSpacing: "0.2",
	color: "#1B1E24"
}

const h5Styles: React.CSSProperties = {
	fontFamily: type.base,
	fontStyle: "normal",
	fontWeight: "bold",
	lineHeight: "normal",
	fontSize: size.h5,
	letterSpacing: "0.2",
	color: "#1B1E24"
}

const captionStyles: React.CSSProperties = {
	fontFamily: type.base,
	fontStyle: "normal",
	fontWeight: 500,
	lineHeight: "normal",
	fontSize: size.caption,
	color: "#1B1E24"
}

const labelStyles: React.CSSProperties = {
	fontFamily: type.base,
	fontStyle: "normal",
	fontWeight: 300,
	lineHeight: "normal",
	fontSize: size.regular,
	textTransform: "uppercase",
	color: Theme.colors.info
}

const regularStyles: React.CSSProperties = {
	fontFamily: type.base,
	fontStyle: "normal",
	fontWeight: 500,
	lineHeight: "1.3125rem",
	fontSize: size.regular,
	color: "#98A9BC"
}

const lightTextStyles: React.CSSProperties = {
	fontFamily: type.base,
	fontStyle: "normal",
	fontWeight: 500,
	lineHeight: "1.3125rem",
	fontSize: size.regular,
	color: "#252631"
}

const linkTextStyles: React.CSSProperties = {
	fontFamily: type.base,
	fontStyle: "normal",
	fontWeight: 500,
	lineHeight: "normal",
	fontSize: size.regular,
	color: "#252631"
}

export default {
	type,
	size,
	iconSize,
	gridSize,
	h1Styles,
	h2Styles,
	h3Styles,
	h4Styles,
	h5Styles,
	captionStyles,
	labelStyles,
	regularStyles,
	lightTextStyles,
	linkTextStyles
}
