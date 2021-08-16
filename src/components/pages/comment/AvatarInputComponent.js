import React, { useState } from "react";
import { Avatar, FormHelperText, makeStyles } from "@material-ui/core";
import CustomInput from "../../../containers/CustomInput";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
	betweenCenterFlex: {
		justifyContent: "space-between",
		alignItems: "center",
	},
	betweenStartFlex: {
		justifyContent: "space-between",
		alignItems: "flex-start",
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
	rootAvatarInput: (props) => ({
		width: "100%",
		height: "100%",
		marginLeft: props.type === "reply" ? "1rem" : "0",
		marginBottom: props.type === "reply" ? "1.2rem" : "0",
		display: props.show ? "flex" : "none",
	}),
	inputHelperContainer: {
		width: "100%",
		height: "calc(100%- 2rem)",
		marginLeft: ".6rem",
	},
	rootHelperText: {
		color: "#212121",
		fontSize: 14,
		marginTop: ".3rem",
		marginLeft: ".8rem",
	},
}));

const AvatarInputComponent = (props) => {
	const classes = useStyles(props);
	const { type, state, setState, handleChangeInput, mode } = props;

	return (
		<div
			className={clsx(
				classes.rowCenterContainer,
				classes.centerStartFlex,
				classes.rootAvatarInput
			)}>
			<Avatar alt="placeholder_user" src="./images/placeholder_user.jpg" />
			<div
				className={clsx(
					classes.columnCenterContainer,
					classes.betweenStartFlex,
					classes.inputHelperContainer
				)}>
				<CustomInput
					inputWidth="98%"
					state={state}
					setState={setState}
					node={{
						placeholder: `write a ${
							type !== undefined ? type + "..." : "comment..."
						}`,
						component: type !== undefined ? type : "comment",
						input_type: "text",
					}}
					// handleChangeInput={({ setting, value, ref }) => {
					// 	setCommentText(value);
					// }}
					handleChangeInput={handleChangeInput}
				/>
				<FormHelperText className={clsx(classes.rootHelperText)}>
					{mode === "edit" ? "Press ESC to cancel." : "Press Enter to post."}
				</FormHelperText>
			</div>
		</div>
	);
};

export default AvatarInputComponent;
