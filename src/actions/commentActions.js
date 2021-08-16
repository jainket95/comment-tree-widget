import * as types from "./types";
import { v4 as v4 } from "uuid";

function Node(data) {
	this.id = v4();
	this.commentData = data;
	this.subComments = [];
}

class Tree {
	constructor(root) {
		this.root = root === undefined ? null : root;
	}

	add(data, toNodeData) {
		const node = new Node(data);

		//if node is provided consider that or take null
		const parent = toNodeData ? this.findBFS(toNodeData) : null;

		if (parent) {
			parent.subComments.push(node);
		} else {
			//if there is no parent, make this the root node
			if (!this.root) {
				this.root = node;
			} else {
				return "root already exists.";
			}
		}
	}

	findBFS(data) {
		const queue = [this.root];
		let currNode = null;

		this.traverseBFS((node) => {
			//return match if found
			if (node.id === data) {
				currNode = node;
			}
		});
		return currNode;
	}

	traverseBFS(cb) {
		const queue = [this.root];

		if (cb) {
			while (queue.length) {
				const node = queue[0];
				queue.shift();

				cb(node);

				//push children of current node to end of queue
				for (const child of node.subComments) {
					queue.push(child);
				}
			}
		}
	}
}

export const addComment = (text, id) => (dispatch) => {
	const commentObject = {
		// id: v4(),
		username: "current user",
		commentText: text,
		timestamp: Date.now(),
		// subComments: [],
	};

	const tempTree = new Tree();

	tempTree.add(commentObject);
	console.log(tempTree);

	dispatch({
		type: types.ADD_COMMENT,
		payload: tempTree.root,
	});
};

export const addReply = (replyText, id) => (dispatch, getState) => {
	const commentObject = {
		// id: v4(),
		username: "current user",
		commentText: replyText,
		timestamp: Date.now(),
	};

	const { comment } = getState();

	const tree = new Tree(comment.comments[0]);
	const currentNode = tree.findBFS(id);
	const tempTree = new Tree();

	// tempTree.add(commentObject, currentNode, tree);

	console.log(currentNode, tree);

	dispatch({
		type: types.ADD_REPLY,
		payload: { commentObject, currentNodeId: id },
	});
};
