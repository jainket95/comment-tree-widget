import React, { useState } from "react";
import {
	FormControl,
	InputLabel,
	makeStyles,
	Menu,
	MenuItem,
	Select,
	Button,
	IconButton,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
	rootDropdown: (props) => ({
		marginLeft: ".3rem",
		display: props.show ? "flex" : "none",
	}),
	rotated: {
		width: "2rem",
		height: "2rem",
		padding: ".2rem",
		transform: "rotate(90deg)",
		"&:hover": {
			backgroundColor: "#f5f5f5",
		},
	},
	menuItem: {
		backgroundColor: "white",
		color: "black",
		minWidth: "10rem",
		"&:hover": {
			backgroundColor: "white",
			color: "black",
		},
	},
	paper: {
		backgroundColor: "white",
	},
}));
const Dropdown = (props) => {
	const classes = useStyles(props);
	const { value, handleChange } = props;
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = (e) => {
		setAnchorEl(null);
		handleChange(e.target.id);
	};

	return (
		<div className={classes.rootDropdown}>
			<IconButton
				className={classes.rotated}
				aria-controls="simple-menu"
				aria-haspopup="true"
				onClick={handleClick}>
				<MoreVertIcon style={{ color: "#9e9e9e" }} />
			</IconButton>
			<Menu
				id="simple-menu"
				anchorEl={anchorEl}
				keepMounted
				classes={{ paper: classes.paper }}
				open={Boolean(anchorEl)}
				onClose={handleClose}>
				<MenuItem id="edit" className={classes.menuItem} onClick={handleClose}>
					Edit
				</MenuItem>
				<MenuItem
					id="delete"
					className={classes.menuItem}
					onClick={handleClose}>
					Delete
				</MenuItem>
			</Menu>
		</div>
	);
};

export default Dropdown;
