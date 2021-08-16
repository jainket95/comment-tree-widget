import { v4 as v4 } from "uuid";

function Node(data) {
	this.id = v4();
	this.commentData = data;
	this.subComments = [];
}

class Tree {
	constructor() {
		this.root = null;
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

				console.log(node);
				cb(node);

				//push children of current node to end of queue
				for (const child of node.subComments) {
					queue.push(child);
				}
			}
		}
	}
}
// (function test() {
// 	let tree = new Tree();

// 	tree.add("Node1");
// 	tree.add("Node2", "Node1");
// 	tree.add("Node3", "Node1");

// 	console.log(tree.findBFS("Node1"));
// 	// tree.traverseBFS((node) => {console.log(node)})
// })();

function Init(param) {
	return new Tree(param);
}

export default initTree;
