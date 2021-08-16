import * as types from "../actions/types";

const initialState = {
	comments: [
		// {
		// 	id: 0,
		// 	username: "username 1",
		// 	commentText: "dummy test",
		// 	timestamp: Date.now() + 60 * 15 * 1000,
		// 	subComments: [],
		// },
		// {
		// 	id: 1,
		// 	username: "username 2",
		// 	commentText: "dummy test",
		// 	timestamp: Date.now() + 60 * 60 * 6 * 1000,
		// 	subComments: [],
		// },
	],
	error: null,
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case types.ADD_COMMENT:
			return { ...state, comments: [...state.comments, payload] };

		case types.ADD_REPLY:
			return { ...state };

		default:
			return state;
	}
};
