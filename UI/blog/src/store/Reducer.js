const initialState = {
    posts: {},
    users: {},
    totalPost: Number,
    remainingPost: Number
}
const randomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_POST':
            let totalPost = action.payload?.post.length;
            let remainingPost = action.payload?.post?.filter(data => data.deleted !== true).length;
            let postWithRandomDate = action.payload?.post?.map(post => { return { ...post, date: randomDate(new Date(2012, 0, 1), new Date()) } })
            return {
                ...state, posts: { post: postWithRandomDate }, totalPost: totalPost, remainingPost: remainingPost
            }
        case 'UPDATE_USER': {
            return {
                ...state, users: action.payload
            }
        }
        case 'DELETE_POST': {
            const { id, deleted } = action.payload;
            const newPosts = state.posts.post?.map(post => post.id === id ? { ...post, deleted: deleted } : post);
            let totalPost = newPosts?.length;
            let remainingPost = newPosts?.filter(data => data.deleted !== true).length;
            let data = {
                ...state, posts: { post: newPosts }, totalPost: totalPost, remainingPost: remainingPost
            }
            return data;
        }
        default: {
            return state
        }
    }
}

export default Reducer