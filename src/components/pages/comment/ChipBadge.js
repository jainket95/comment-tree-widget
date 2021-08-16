import React from "react";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import CustomTypography from "../../../containers/CustomTypography";

const useStyles = makeStyles((theme) => ({
	betweenCenterFlex: {
		justifyContent: "space-between",
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
	rootChipBadge: (props) => ({
		width: "2.7rem",
		height: "1.5rem",
		backgroundColor: "#fff",
		borderRadius: "1rem",
		padding: "3px 5px",
		boxShadow: `0 .2rem .5rem rgba(0,0,0,0.6)`,
		position: "relative",
		left: "-.5rem",
		top: "1rem",
		display: props.show ? "flex" : "none",
	}),
	rounded: {
		width: "1.2rem",
		height: "1.2rem",
		borderRadius: "50%",
		backgroundColor: "rgb(32, 120, 244)",
	},
}));

const ChipBadge = (props) => {
	const classes = useStyles(props);

	return (
		<div
			className={clsx(
				classes.rowCenterContainer,
				classes.betweenCenterFlex,
				classes.rootChipBadge
			)}>
			<div
				className={clsx(
					classes.rowCenterContainer,
					classes.centerCenterFlex,
					classes.rounded
				)}>
				<ThumbUpAltIcon style={{ color: "white", fontSize: "1rem" }} />
			</div>
			<CustomTypography
				variant="body1"
				customColor={{
					color: "#616161",
				}}>
				1
			</CustomTypography>
		</div>
	);
};

export default ChipBadge;
