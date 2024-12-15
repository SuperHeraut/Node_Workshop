const posts = [
	{ id: 1, title: "First Post" },
	{ id: 2, title: "Second Post" },
];
const getPosts = () => posts;

export const getPostsLength = () => posts.length;
export default getPosts;