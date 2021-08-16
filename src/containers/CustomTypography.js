import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

import { sentenceCase } from "change-case";

const useStyles = makeStyles((theme) => ({
	root: (props) => ({
		textAlign: props.align ? props.align : "normal",
		textTransform: props.case ? props.case : "normal",
		fontWeight: props.fontWeight ? props.fontWeight : "normal",
		marginBottom: props.mBottom ? props.mBottom : "0",
		marginTop: props.mTop ? props.mTop : "0",
		marginRight: props.mRight ? props.mRight : "0",
		marginLeft: props.mLeft ? props.mLeft : "0",
		color: props.customColor ? props.customColor : "0",
		...props.width,
		...props.height,
		...props.fontSize,
	}),
}));

const CustomTypography = (props) => {
	const classes = useStyles(props);
	const { variant, color, component, text } = props;

	if (text) {
		return (
			<Typography
				variant={variant}
				color={color}
				component={component}
				className={classes.root}>
				{sentenceCase(text)}
			</Typography>
		);
	}

	return (
		<Typography
			variant={variant}
			color={color}
			component={component}
			className={classes.root}>
			{/* {sentenceCapitalize(props.children)} */}
			{props.children}
		</Typography>
	);
};

export default CustomTypography;
