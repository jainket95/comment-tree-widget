import React from "react";
import { render } from "react-dom";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import App from "./App";
import theme from "./utils/theme";
import { Provider } from "react-redux";
import store from "./store";

const root = document.getElementById("root");

render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<App />
		</ThemeProvider>
	</Provider>,
	root
);
