export default theme => ({
	editor: {
		backgroundColor: theme.colors.primary,
		"& .ql-snow": {
			border: "none !important"
		},
		"& .ql-formats": {
			margin: "0 !important"
		},
		"& .ql-editor": {
			height: ({ height }) => height,
			width: "95%"
		}
	}
})
