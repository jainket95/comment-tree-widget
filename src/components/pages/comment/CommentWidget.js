import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import AvatarInputComponent from "./AvatarInputComponent";
import Comment from "./Comment";
import { connect } from "react-redux";
import { addComment, addReply } from "../../../actions/commentActions";
import { v4 } from "uuid";

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
	rootCommentWidget: {
		width: "100%",
		height: "100%",
	},
	avatarComponent: {
		width: "100%",
		height: "6rem",
	},
	commentListContainer: {
		width: "100%",
		height: "auto",
	},
}));

const CommentWidget = ({}) => {
	const classes = useStyles();
	const [commentText, setCommentText] = useState("");
	let [comments, setComments] = useState([
		{
			id: 0,
			username: "username 1",
			commentText: "dummy test 1",
			timestamp: Date.now(),
			isInside: false,
			subComments: [
				{
					id: 2,
					username: "username 1",
					commentText: "dummy test 2",
					timestamp: Date.now(),
					isInside: true,
					subComments: [
						{
							id: 3,
							username: "username 1",
							commentText: "dummy test 3",
							timestamp: Date.now(),
							isInside: true,
							subComments: [],
						},
						{
							id: 4,
							username: "username 1",
							commentText: "dummy test 4",
							timestamp: Date.now(),
							isInside: true,
							subComments: [],
						},
					],
				},
			],
		},
		{
			id: 1,
			username: "username 2",
			isLiked: false,
			commentText: "dummy test 5",
			timestamp: Date.now(),
			isInside: false,
			subComments: [],
		},
	]);

	const [editMode, setEditMode] = useState(false);

	const addComment = (text) => {
		const commentObject = {
			id: v4(),
			username: "current user",
			commentText: text,
			timestamp: Date.now(),
			isInside: false,
			subComments: [],
		};

		comments = [...comments, commentObject];
		setComments(comments);
	};

	const handleInputChange = (value) => {
		setCommentText(value);
		addComment(value);
	};

	const onDeleteComment = (commentNode, id) => {
		comments = comments.filter((comment) => comment.id !== commentNode.id);

		setComments(comments);
	};

	const onEditComment = (commentNode, value) => {
		comments = comments.map((comment) => {
			if (comment.id === commentNode.id) {
				comment.commentText = value;
				comment.edited = true;
				return comment;
			}
			return comment;
		});
		setComments(comments);
	};

	return (
		<div
			className={clsx(
				classes.columnCenterContainer,
				classes.startCenterFlex,
				classes.rootCommentWidget
			)}>
			<div
				className={clsx(
					classes.columnCenterContainer,
					classes.startCenterFlex,
					classes.commentListContainer
				)}>
				{comments &&
					comments.length > 0 &&
					comments.map((comment) => (
						<Comment
							key={comment.id}
							comment={comment}
							onDeleteComment={onDeleteComment}
							onEditComment={onEditComment}
							// id={comment.id}
							// username={comment.username}
							// commentText={comment.commentText}
							// subComments={comment.subComments}
							// timestamp={comment.timestamp}
						/>
					))}
			</div>
			<div
				className={clsx(
					classes.columnCenterContainer,
					classes.centerCenterFlex,
					classes.avatarComponent
				)}>
				<AvatarInputComponent
					type="comment"
					show={true}
					mode="add"
					state={commentText}
					setState={setCommentText}
					handleChangeInput={handleInputChange}
				/>
			</div>
		</div>
	);
};

export default connect(null, null)(CommentWidget);
