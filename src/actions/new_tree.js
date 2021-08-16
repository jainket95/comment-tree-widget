let comments = [
	{
		id: 0,
		username: "username 1",
		commentText: "dummy test",
		timestamp: Date.now() + 60 * 15 * 1000,
		subComments: [
			{
				id: 3,
				username: "username 1",
				commentText: "dummy test",
				timestamp: Date.now() + 60 * 15 * 1000,
				subComments: [],
			},
			{
				id: 4,
				username: "username 1",
				commentText: "dummy test",
				timestamp: Date.now() + 60 * 15 * 1000,
				subComments: [],
			},
		],
	},
	{
		id: 1,
		username: "username 2",
		commentText: "dummy test",
		timestamp: Date.now() + 60 * 60 * 6 * 1000,
		subComments: [
			{
				id: 5,
				username: "username 1",
				commentText: "dummy test",
				timestamp: Date.now() + 60 * 15 * 1000,
				subComments: [],
			},
		],
	},
];

function CommentNode(data) {
	this.commentData = data;
	this.subComments = [];
}

function Tree() {
	this.root = null;
}

Tree.prototype.addNodeComment = function (commentObject, commentObjNode) {
	const node = new CommentNode(commentObject);

	const parent = commentObjNode ? this.findNode(commentObjNode) : null;

	if (parent) {
		parent.subComments.push(node);
	} else {
		if (!this.root) {
			this.root = node;
		} else {
			return "Tried to store node as root but root already exists";
		}
	}
};

Tree.prototype.findNode = function (node) {
	const queue = [this.root];
	let tempNode = null;

	this.traverseNode((commentNode) => {
		if (commentNode.commentData.commentText === node.commentText) {
			tempNode = node;
		}
	});

	return tempNode;
};

Tree.prototype.traverseNode = function (cb) {
	const queue = [this.root];

	if (cb) {
		while (queue.length) {
			const node = queue.shift();

			cb(node);

			if (node.subComments) {
				for (const child of node.subComments) {
					queue.push(child);
				}
			}
		}
	}
};

const dummy = {
	username: "username 1",
	commentText: "dummy test",
	timestamp: Date.now() + 60 * 15 * 1000,
};

const dummy2 = {
	username: "username 1",
	commentText: "dummy test 2",
	timestamp: Date.now() + 60 * 15 * 1000,
};

const tree = new Tree();

tree.addNodeComment(dummy);
tree.addNodeComment(dummy2, dummy);

console.log("node", tree.findNode(dummy));

console.log(tree);
