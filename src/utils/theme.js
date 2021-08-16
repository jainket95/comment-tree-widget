import { createTheme, responsiveFontSizes } from "@material-ui/core";

let theme = createTheme({
	breakpoints: {
		keys: ["xs", "sm", "md", "lg", "xl"],
		values: {
			xs: 320,
			sm: 640,
			md: 768,
			lg: 1024,
			xl: 1440,
		},
	},
	direction: "ltr",
	mixins: {
		toolbar: {
			minHeight: 56,
			"@media (min-width:0px) and (orientation: landscape)": {
				minHeight: 48,
			},
			"@media (min-width:600px)": {
				minHeight: 64,
			},
		},
	},
	overrides: {
		MuiCssBaseline: {
			"@global": {
				"*": {
					margin: 0,
					padding: 0,
					boxSizing: "border-box",
					"&::after, &::before": {
						margin: 0,
						padding: 0,
						boxSizing: "border-box",
					},
				},

				html: {
					boxSizing: "border-box",
				},
				body: {
					fontFamily: [
						"'Poppins'",
						"'Roboto'",
						"'Helvetica'",
						"'Arial'",
						"sans-serif",
					].join(","),
					WebkitFontSmoothing: "antialiased",
					MozOsxFontSmoothing: "grayscale",
					backgroundColor: "#fff",
					color: "black",
					boxSizing: "border-box",
				},
				// form,
				// input,
				// textarea,
				// button,
				// select,
				a: {
					webkitTapHighlightColor: "rgba(0, 0, 0, 0)",
					textDecoration: "none",
					outline: "none",
				},
			},
		},
	},
	palette: {
		common: {
			black: "#000",
			white: "#fff",
			componentBg: "#1A1A1A",
			importItemBg: "#292929",
			normalBg: "#080808",
			inputFocusedBg: "#101010",
			inputUnfocusedBg: "#666666",
		},
		type: "light",
		primary: {
			light: "#4B8AFF",
			main: "#1E6DFF",
			dark: "#0050E4",
			contrastText: "#fff",
		},
		secondary: {
			light: "#999999",
			main: "#eee",
			dark: "#666666",
			contrastText: "#fff",
		},
		error: {
			light: "#F05559",
			main: "#EB191F",
			dark: "#D41216",
			contrastText: "#fff",
		},
		warning: {
			light: "#FF9C55",
			main: "#FF832B",
			dark: "#EE6300",
			contrastText: "rgba(0, 0, 0, 0.87)",
		},
		info: {
			light: "#01C7FC",
			main: "#00A1D8",
			dark: "#008CB4",
			contrastText: "#fff",
		},
		success: {
			light: "#6CD489",
			main: "#47C96C",
			dark: "#31A853",
			contrastText: "rgba(0, 0, 0, 0.87)",
		},
		grey: {
			50: "#fafafa",
			100: "#f5f5f5",
			200: "#eeeeee",
			300: "#e0e0e0",
			400: "#bdbdbd",
			500: "#9e9e9e",
			600: "#757575",
			700: "#616161",
			800: "#424242",
			900: "#212121",
			A100: "#d5d5d5",
			A200: "#aaaaaa",
			A400: "#303030",
			A700: "#616161",
		},
		contrastThreshold: 3,
		// getContrastText: f E()
		// augmentColor: f B()
		tonalOffset: 0.2,
		text: {
			primary: "#fff",
			secondary: "rgba(255, 255, 255, 0.7)",
			disabled: "rgba(255, 255, 255, 0.5)",
		},
		divider: "rgba(255, 255, 255, 0.12)",
		background: {
			paper: "#424242",
			default: "#000",
		},
		action: {
			active: "#fff",
			hover: "rgba(255, 255, 255, 0.08)",
			hoverOpacity: "0.08",
			selected: "rgba(255, 255, 255, 0.16)",
			selectedOpacity: "0.16",
			disabled: "rgba(255, 255, 255, 0.3)",
			disabledBackground: "rgba(255, 255, 255, 0.12)",
			disabledOpacity: "0.38",
			focus: "rgba(255, 255, 255, 0.12)",
			focusOpacity: "0.12",
			activatedOpacity: "0.24",
		},
	},
	props: {
		MuiTypography: {
			variantMapping: {
				h1: "h1",
				h2: "h2",
				h3: "h3",
				h4: "h4",
				h5: "h5",
				h6: "h6",
				h7: "h7",
				subtitle1: "h6",
				subtitle2: "h6",
				body1: "span",
				body2: "span",
				label1: "span",
				helper1: "span",
				bodyshort1: "p",
				bodyshort2: "p",
				bodylong1: "p",
				bodylong2: "p",
			},
		},
	},
	shadows: [
		"none",
		"0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
		"0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
		"0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
		"0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
		"0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
		"0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
		"0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
		"0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
		"0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
		"0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
		"0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
		"0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
		"0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
		"0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
		"0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
		"0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
		"0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
		"0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
		"0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
		"0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
		"0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
		"0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
		"0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
		"0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
	],
	typography: {
		htmlFontSize: 16,
		// pxToRem: f ()
		// round: f S()
		fontFamily: [
			"'Poppins'",
			"'Roboto'",
			"'Helvetica'",
			"'Arial'",
			"sans-serif",
		].join(","),
		fontSize: 16,
		fontWeightLight: "300",
		fontWeightRegular: "400",
		fontWeightMedium: "500",
		fontWeightSemiMedium: "600",
		fontWeightBold: "700",

		//customized header
		h1: {
			fontFamily: [
				"'Poppins'",
				"'Roboto'",
				"'Helvetica'",
				"'Arial'",
				"sans-serif",
			].join(","),
			fontWeight: 600,
			fontSize: "3.375rem",
			lineHeight: 4,
			letterSpacing: "0",
		},
		h2: {
			fontFamily: [
				"'Poppins'",
				"'Roboto'",
				"'Helvetica'",
				"'Arial'",
				"sans-serif",
			].join(","),
			fontWeight: 600,
			fontSize: "2.625rem",
			lineHeight: 3.125,
			letterSpacing: "0",
		},
		h3: {
			fontFamily: [
				"'Poppins'",
				"'Roboto'",
				"'Helvetica'",
				"'Arial'",
				"sans-serif",
			].join(","),
			fontWeight: 400,
			fontSize: "2.5rem",
			lineHeight: 1.4,
			letterSpacing: "0em",
		},
		h4: {
			fontFamily: [
				"'Poppins'",
				"'Roboto'",
				"'Helvetica'",
				"'Arial'",
				"sans-serif",
			].join(","),
			fontWeight: 400,
			fontSize: "1.75rem",
			lineHeight: 1.5,
			letterSpacing: "0",
		},
		h5: {
			fontFamily: [
				"'Poppins'",
				"'Roboto'",
				"'Helvetica'",
				"'Arial'",
				"sans-serif",
			].join(","),
			fontWeight: 400,
			fontSize: "1.25rem",
			lineHeight: 1.375,
			letterSpacing: "0",
		},
		h6: {
			fontFamily: [
				"'Poppins'",
				"'Roboto'",
				"'Helvetica'",
				"'Arial'",
				"sans-serif",
			].join(","),
			fontWeight: 600,
			fontSize: "1.15rem",
			lineHeight: 1.375,
			letterSpacing: "0",
		},
		h7: {
			fontFamily: [
				"'Poppins'",
				"'Roboto'",
				"'Helvetica'",
				"'Arial'",
				"sans-serif",
			].join(","),
			fontWeight: 600,
			fontSize: ".875rem",
			lineHeight: 1.125,
			letterSpacing: ".16px",
		},
		// new classes
		label1: {
			fontFamily: [
				"Poppins",
				"Roboto",
				"Helvetica",
				"Arial",
				"sans-serif",
			].join(","),
			fontWeight: 400,
			fontSize: ".875rem",
			lineHeight: 1.125,
			letterSpacing: ".16px",
			textTransform: "capitalize",
		},
		helper1: {
			fontFamily: [
				"Poppins",
				"Roboto",
				"Helvetica",
				"Arial",
				"sans-serif",
			].join(","),
			fontWeight: 400,
			fontSize: ".75rem",
			lineHeight: 1,
			letterSpacing: ".32px",
			textTransform: "capitalize",
		},
		shortbody1: {
			fontFamily: [
				"Poppins",
				"Roboto",
				"Helvetica",
				"Arial",
				"sans-serif",
			].join(","),
			fontWeight: 400,
			fontSize: ".875rem",
			lineHeight: 1.125,
			letterSpacing: ".16px",
			textTransform: "capitalize",
		},
		shortbody2: {
			fontFamily: [
				"Poppins",
				"Roboto",
				"Helvetica",
				"Arial",
				"sans-serif",
			].join(","),
			fontWeight: 400,
			fontSize: ".875rem",
			lineHeight: 1.125,
			letterSpacing: ".16px",
			textTransform: "capitalize",
		},
		longbody1: {
			fontFamily: [
				"Poppins",
				"Roboto",
				"Helvetica",
				"Arial",
				"sans-serif",
			].join(","),
			fontWeight: 400,
			fontSize: ".875rem",
			lineHeight: 1.25,
			letterSpacing: ".16px",
			textTransform: "capitalize",
		},
		subtitle1: {
			fontFamily: [
				"'Poppins'",
				"'Roboto'",
				"'Helvetica'",
				"'Arial'",
				"sans-serif",
			].join(","),
			fontWeight: 400,
			fontSize: "1rem",
			lineHeight: 1.75,
			letterSpacing: "0.00938em",
		},
		subtitle2: {
			fontFamily: [
				"'Poppins'",
				"'Roboto'",
				"'Helvetica'",
				"'Arial'",
				"sans-serif",
			].join(","),
			fontWeight: 500,
			fontSize: "0.875rem",
			lineHeight: 1.57,
			letterSpacing: "0.00714",
		},
		body1: {
			fontFamily: [
				"'Poppins'",
				"'Roboto'",
				"'Helvetica'",
				"'Arial'",
				"sans-serif",
			].join(","),
			fontWeight: 400,
			fontSize: "1rem",
			lineHeight: 1.5,
			letterSpacing: "0.00938",
		},
		body2: {
			fontFamily: [
				"'Poppins'",
				"'Roboto'",
				"'Helvetica'",
				"'Arial'",
				"sans-serif",
			].join(","),
			fontWeight: 400,
			fontSize: "0.875rem",
			lineHeight: 1.43,
			letterSpacing: "0.01071em",
		},
		button: {
			fontFamily: [
				"'Poppins'",
				"'Roboto'",
				"'Helvetica'",
				"'Arial'",
				"sans-serif",
			].join(","),
			fontWeight: 500,
			fontSize: "0.875rem",
			lineHeight: 1.75,
			letterSpacing: "0.02857em",
			textTransform: "uppercase",
		},
		caption: {
			fontFamily: [
				"'Poppins'",
				"'Roboto'",
				"'Helvetica'",
				"'Arial'",
				"sans-serif",
			].join(","),
			fontWeight: 400,
			fontSize: "0.75rem",
			lineHeight: 1.66,
			letterSpacing: "0.03333em",
		},
		overline: {
			fontFamily: [
				"'Poppins'",
				"'Roboto'",
				"'Helvetica'",
				"'Arial'",
				"sans-serif",
			].join(","),
			fontWeight: 400,
			fontSize: "0.75rem",
			lineHeight: 2.66,
			letterSpacing: "0.08333em",
			textTransform: "uppercase",
		},
	},
	// spacing: f e()
	// mui: true
	shape: {
		borderRadius: 4,
	},
	transitions: {
		easing: {
			easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
			easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
			easeIn: "cubic-bezier(0.4, 0, 1, 1)",
			sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
		},
		duration: {
			shortest: 150,
			shorter: 200,
			short: 250,
			standard: 300,
			complex: 375,
			enteringScreen: 225,
			leavingScreen: 195,
		},
	},
	// create: f create()
	// getAutoHeightDuration: f getAutoHeightDuration()
	zIndex: {
		mobileStepper: 1000,
		speedDial: 1050,
		appBar: 1100,
		drawer: 1200,
		modal: 1300,
		snackbar: 1400,
		tooltip: 1500,
	},
});

theme = responsiveFontSizes(theme);

export default theme;