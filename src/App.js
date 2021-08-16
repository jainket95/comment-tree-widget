import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import CustomTypography from "./containers/CustomTypography";
import CommentWidget from "./components/pages/comment/CommentWidget";

const useStyles = makeStyles((theme) => ({
	betweenCenterFlex: {
		justifyContent: "space-between",
		alignItems: "center",
	},
	aroundCenterFlex: {
		justifyContent: "space-around",
		alignItems: "center",
	},
	centerCenterFlex: {
		justifyContent: "center",
		alignItems: "center",
	},
	rowCenterContainer: {
		width: "100%",
		height: "3.5rem",
		display: "flex",
	},
	columnCenterContainer: {
		width: "100%",
		height: "3.5rem",
		display: "flex",
		flexDirection: "column",
	},
	rootApp: {
		width: "100vw",
		height: "100vh",
		padding: "3rem",
	},
	commentContainer: {
		width: "60rem",
		height: "80rem",
		padding: "3rem",
	},
}));

const App = () => {
	const classes = useStyles();

	return (
		<div
			className={clsx(
				classes.columnCenterContainer,
				classes.aroundCenterFlex,
				classes.rootApp
			)}>
			<CustomTypography variant="h3" case="capitalize">
				comment box widget
			</CustomTypography>
			<div
				className={clsx(
					classes.columnCenterContainer,
					classes.centerCenterFlex,
					classes.commentContainer
				)}>
				<CommentWidget />
			</div>
		</div>
	);
};

export default App;
