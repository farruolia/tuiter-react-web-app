import {createSlice} from "@reduxjs/toolkit";
import tuits from "./tuits.json";

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}


const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        },
        likeToggle(state, action) {
            const post = state.find((post) =>
                post._id === action.payload._id)
            console.log(post)
            post.liked = !post.liked
        }
    }
});

export const {createTuit, deleteTuit, likeToggle} = tuitsSlice.actions
export default tuitsSlice.reducer;