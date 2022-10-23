import React from "react";
import postArray from "./post.json"
import PostListItem from "./postListItem";

const HomeComponent = () => {
    return (
        <ul className="list-group">
            {
                postArray.map(post =>
                    <PostListItem
                        key={post._id}
                        post={post}
                    />
                )
            }
        </ul>
    )
}

export default HomeComponent