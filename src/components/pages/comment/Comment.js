import React, { useEffect, useRef } from "react";
import {
	makeStyles,
	Button,
	Avatar,
	Chip,
	Tooltip,
	withStyles,
} from "@material-ui/core";
import clsx from "clsx";
import CustomTypography from "../../../containers/CustomTypography";
import { useState } from "react";
import ChipBadge from "./ChipBadge";
import AvatarInputComponent from "./AvatarInputComponent";
import { sentenceCase } from "change-case";
import Dropdown from "./Dropdown";
// import { addReply } from "../../../actions/commentActions";
import { connect } from "react-redux";
import { v4 } from "uuid";

const useStyles = makeStyles((theme) => ({
	betweenCenterFlex: {
		justifyContent: "space-between",
		alignItems: "center",
	},
	betweenStartFlex: {
		justifyContent: "space-between",
		alignItems: "flex-start",
	},
	centerStartFlex: {
		justifyContent: "center",
		alignItems: "flex-start",
	},
	startCenterFlex: {
		justifyContent: "flex-start",
		alignItems: "center",
	},
	startStartFlex: {
		justifyContent: "flex-start",
		alignItems: "start",
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
	rootComment: {
		width: "100%",
		height: "auto",
		position: "relative",
	},
	avatar: {
		marginLeft: ".5rem",
		marginRight: ".6rem",
		zIndex: "100",
	},
	mainCommentContainer: {
		width: "max-content",
		height: "100%",
		// marginLeft: ".6rem",
		position: "relative",
	},
	commentContentContainer: {
		width: "100%",
		height: "calc(100% - 2rem)",
		backgroundColor: "#eee",
		padding: ".5rem 1rem .5rem .7rem",
		borderRadius: "1.5rem",
	},
	commentActionContainer: {
		height: "2rem",
		marginBottom: "0.2rem",
	},
	button: {
		fontWeight: "600",
		color: "rgb(117, 117, 117)",
		textTransform: "capitalize",
		"&:hover": {
			textDecoration: "underline",
		},
	},
	time: {
		color: "#9e9e9e",
		textTransform: "lowercase",
		marginLeft: ".2rem",
		fontSize: ".8rem",
	},
	grey: {
		width: "3px",
		backgroundColor: "#e0e0e0",
		height: "3px",
		borderRadius: "50%",
	},
	perpendicular: (props) => ({
		width: "3px",
		height: "6.4rem",
		backgroundColor: "#e0e0e0",
		position: "absolute",
		top: "1rem",
		left: "-1.9rem",
	}),
	vertical: {
		width: "2.4rem",
		height: "3px",
		backgroundColor: "#e0e0e0",
		position: "absolute",
		top: "1.2rem",
		left: "-5.5rem",
		borderRadius: "0px 0px 0px 10px",
	},
}));

const Dot = () => {
	const classes = useStyles();
	return <div className={clsx(classes.grey)}></div>;
};

const DarkTooltip = withStyles((theme) => ({
	tooltip: {
		backgroundColor: "#212121",
		color: "#f5f5f5",
		boxShadow: theme.shadows[1],
		fontSize: 14,
	},
}))(Tooltip);

const debounce = (func, delay) => {
	let timer;
	return function () {
		clearTimeout(timer);
		timer = setTimeout(() => {
			func.apply(this, arguments);
		}, delay);
	};
};

const Comment = ({
	comment,
	onDeleteComment,
	onEditComment,
	updateComments,
}) => {
	const classes = useStyles();
	const ref = useRef();

	const [isLiked, setIsLiked] = useState(false);
	const [isReplying, setIsReplying] = useState(false);
	const [hover, setHover] = useState(false);
	let [replyText, setReplyText] = useState("");
	const [editMode, setEditMode] = useState(false);
	const [lineHeight, setLineHeight] = useState(false);
	const [replyDropdown, setReplyDropdown] = useState(true);

	const { username, commentText, id, subComments, timestamp } = comment;
	// console.log(comment);

	useEffect(() => {
		ref.current.addEventListener("load", currentCommentNode);
		setLineHeight(comment.subComments.length * 6.3);

		if (comment.subComments.length > 1) {
			setReplyDropdown(!replyDropdown);
		}
	}, [comment]);

	const currentCommentNode = () => {
		return ref.current;
	};

	const onActionContainer = (e) => {
		//if like button is pressed
		if (e.target.parentElement.id === "like" && !isLiked) {
			e.target.style.color = "rgb(32, 120, 244)";
			setIsLiked(!isLiked);
		} else if (e.target.parentElement.id === "like" && isLiked) {
			e.target.style.color = "rgb(117, 117, 117)";
			setIsLiked(!isLiked);
		}

		//if reply button is pressed
		if (e.target.parentElement.id === "reply" && !isReplying) {
			setIsReplying(!isReplying);
		} else if (e.target.parentElement.id === "reply" && isReplying) {
			setIsReplying(!isReplying);
		}
	};
	const getLapsedTime = (timestamp) => {
		let text = "";

		let currentTime = Date.now();

		var seconds = Math.floor((currentTime - timestamp) / 1000);
		var minutes = Math.floor(seconds / 60);
		var hours = Math.floor(minutes / 60);
		var days = Math.floor(hours / 24);

		hours = hours - days * 24;
		minutes = minutes - days * 24 * 60 - hours * 60;
		seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;

		if (days > 0) {
			text = `${days} ${days === 1 ? "day" : "days"} ago`;
		} else if (days <= 0 && hours > 0) {
			text = `${hours} ${hours === 1 ? "hr" : "hrs"} ago`;
		} else if (hours <= 0 && minutes > 0) {
			text = `${minutes} ${minutes === 1 ? "min" : "mins"} ago`;
		} else if (minutes <= 0 && seconds >= 0) {
			text = `a few seconds ago`;
		}

		// console.log(timestamp, currentTime, days, hours, minutes, seconds, text);
		return text;
	};

	const onMouseEnter = (e) => {
		if (ref.current.id === commentText) setHover(true);
	};
	const onMouseLeave = (e) => {
		setHover(false);
	};

	const addReply = (text) => {
		const replyObject = {
			id: v4(),
			username: "current user",
			commentText: text,
			timestamp: Date.now(),
			isInside: true,
			subComments: [],
		};

		comment.subComments.push(replyObject);
	};

	const handleInputChange = (value) => {
		setReplyText(value);
		if (comment.subComments.length <= 0) {
			setLineHeight(lineHeight + 6.3);
		} else {
			setLineHeight(lineHeight + 6.1 * 2);
		}
		addReply(value);
		setIsReplying(!isReplying);
	};
	const handleEditInputChange = (value) => {
		if (!value) {
			setEditMode(!editMode);
		}
		setReplyText(value);
		if (onEditComment) {
			onEditComment(comment, value);
		} else {
			onEditReply(comment, value);
		}

		setEditMode(!editMode);
	};
	// const onEditComment = (value) => {};

	const onDeleteReply = (commentNode) => {
		if (comment.id === commentNode.id) {
			onDeleteComment(commentNode);
		}

		subComments.filter((comment) => comment.id !== commentNode.id);
	};

	const onEditReply = (commentNode, value) => {
		console.log(commentNode, value, comment);
		if (comment.id === commentNode.id) {
			comment.commentText = value;
			comment.edited = true;
		}
		comment = commentNode.subComments.map((comment) => {
			if (comment.id === commentNode.id) {
				comment.commentText = value;
				comment.edited = true;
				return comment;
			}
			return comment;
		});
	};

	if (editMode) {
		return (
			<AvatarInputComponent
				type="reply"
				mode="edit"
				show={editMode}
				state={replyText}
				setState={setReplyText}
				handleChangeInput={handleEditInputChange}
			/>
		);
	}

	return (
		<div
			className={clsx(
				classes.rowCenterContainer,
				classes.startStartFlex,
				classes.rootComment
			)}
			ref={ref}
			id={commentText}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}>
			<Avatar
				className={classes.avatar}
				alt="placeholder_user"
				src="./images/placeholder_user.jpg"
			/>

			<div
				className={clsx(
					classes.columnCenterContainer,
					classes.startStartFlex,
					classes.rootComment
				)}>
				{comment.subComments && comment.subComments.length > 0 && (
					<div
						className={classes.perpendicular}
						style={{ height: `${lineHeight}rem` }}></div>
				)}
				<div
					className={clsx(
						classes.rowCenterContainer,
						classes.centerCenterFlex,
						classes.mainCommentContainer
					)}>
					<div
						className={clsx(
							classes.columnCenterContainer,
							classes.centerStartFlex,
							classes.commentContentContainer
						)}>
						<CustomTypography
							variant="subtitle1"
							fontWeight="600"
							text={username}
						/>
						<CustomTypography
							variant="body2"
							component="p"
							// text={commentText}
						>
							{commentText}
						</CustomTypography>
					</div>
					<ChipBadge show={isLiked} />
					<Dropdown
						show={hover}
						// value={selectedMenu}
						handleChange={(value) => {
							if (value === "edit") {
								setEditMode(!editMode);
								replyText = commentText;
								setReplyText(replyText);
								// onEditComment(comment);
							} else if (value === "delete") {
								onDeleteComment(comment);
							}
						}}
					/>
				</div>
				<div
					className={clsx(
						classes.rowCenterContainer,
						classes.startCenterFlex,
						classes.commentActionContainer
					)}
					onClick={(e) => {
						onActionContainer(e);
					}}>
					<Button id="like" className={classes.button}>
						like
					</Button>
					<Dot />
					<Button id="reply" className={classes.button}>
						reply
					</Button>
					<Dot />
					<DarkTooltip title={`${new Date(timestamp)}`} placement="bottom">
						<Button className={clsx(classes.button, classes.time)}>
							{sentenceCase(getLapsedTime(timestamp))}
						</Button>
						{/* <Button>bottom-start</Button> */}
					</DarkTooltip>
					{comment.edited && (
						<CustomTypography
							className={classes.button}
							variant="caption"
							case="capitalize">
							edited
						</CustomTypography>
					)}
				</div>
				{comment.isInside && <div className={classes.vertical}></div>}
				{/* {replyDropdown && (
					<CustomTypography
						variant="body1"
						onClick={() => setReplyDropdown(!replyDropdown)}>
						{subComments.length} replies.
					</CustomTypography>
				)} */}
				{subComments &&
					subComments.length > 0 &&
					subComments.map((comment) => (
						<Comment
							key={comment.id}
							comment={comment}
							onDeleteComment={onDeleteReply}
							onDeleteComment={onEditReply}
							// id={comment.id}
							// username={comment.username}
							// commentText={comment.commentText}
							// subComments={comment.subComments}
							// timestamp={comment.timestamp}
						/>
					))}

				<AvatarInputComponent
					type="reply"
					mode="add"
					show={isReplying || editMode}
					state={replyText}
					setState={setReplyText}
					handleChangeInput={handleInputChange}
				/>
			</div>
		</div>
	);
};

export default connect(null, null)(Comment);
