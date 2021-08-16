import React, { useRef, useEffect } from "react";
import { makeStyles, Input, InputAdornment } from "@material-ui/core";
import "../utils/input_step.css";
import { camelCase, sentenceCase } from "change-case";

const useStyles = makeStyles((theme) => ({
	root: (props) => ({
		width: props.inputWidth ? props.inputWidth : "50%",
		height: "2.4rem",
		minHeight: "2.4rem",
		marginLeft: props.mLeft ? props.mLeft : "0",
		marginRight: props.mRight ? props.mRight : "0",
	}),
	input: (props) => ({
		width: "100%",
		minHeight: "2.4rem",
		height: "100%",
		maxHeight: "2.4rem",
		color: "black",
		fontSize: "1rem",
		fontWeight: "400",
		padding: ".2rem",
		letterSpacing: ".5px",
		paddingLeft: ".8rem",
		borderRadius: "10rem",
		backgroundColor: "#EEE",
		"&::placeholder": {
			textOverflow: "ellipsis !important",
			color: "black !important",
		},
		"&:placeholder-shown": {
			textOverflow: "ellipsis !important",
			color: "black !important",
		},
	}),
	centerCenterFlex: {
		justifyContent: "center",
		alignItems: "center",
	},
	rowCenterContainer: {
		width: "100%",
		height: "100%",
		display: "flex",
	},
	inputContainer: (props) => ({
		...props.inputContainerStyle,
	}),
}));

const CustomInput = (props) => {
	const classes = useStyles(props);
	const localRef = useRef(null);

	const { component, placeholder, inputType } = props.node;
	const { handleChangeInput, setState, state } = props;

	useEffect(() => {
		if (state !== null) {
			setState(state);
		}
	}, [props.node, props.state]);

	const handleChange = (e) => {
		const settingData = {
			setting: e.target.name,
			value: e.target.value,
			ref: localRef.current,
		};

		// handleChangeInput(settingData);
		setState(e.target.value);
	};

	const onKeyPress = (e) => {
		if (e.which === 13) {
			const settingData = {
				setting: e.target.name,
				value: e.target.value,
				ref: localRef.current,
			};

			handleChangeInput(e.target.value);
			setState("");
		} else if (e.key === "Escape") {
			handleChangeInput(false);
		}
	};

	return (
		<Input
			ref={localRef}
			disableUnderline={true}
			classes={{
				root: classes.root,
				input: classes.input,
				focused: classes.focused,
			}}
			name={camelCase(component)}
			type={inputType}
			value={state}
			placeholder={sentenceCase(placeholder)}
			onChange={handleChange}
			onKeyPress={onKeyPress}
		/>
	);
};

export default CustomInput;
