import React from "react";
import postArray from "./posts.json";
import PostSummaryListItem from "./postSummaryListItem";
import {useSelector} from "react-redux";

const PostSummaryList = () => {
    const postArray = useSelector(state => state.tuits)
    return (
        <ul className="list-group">
            {
                postArray.map(post =>
                    <PostSummaryListItem
                    key = {post._id}
                    post = {post}/>
                )
            }
        </ul>
    )
}

export default PostSummaryList