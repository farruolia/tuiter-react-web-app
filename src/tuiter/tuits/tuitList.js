import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./tuitItem";

const TuitList = () => {
    const postArray = useSelector(state => state.tuits)
    return (
        <ul className="list-group">
            {
                postArray.map((post) =>
                    <TuitItem
                        key={post._id}
                        post={post}
                    />
                )
            }
        </ul>
    )
}

export default TuitList