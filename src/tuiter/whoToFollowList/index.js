import React from "react";
import whoArray from "./who.json"
import WhoToFollowListItem from "./whoToFollowListItem";

const WhoToFollowList = () => {

    return (
        <ul className="list-group">
            <li className="list-group-item wd-list-group-who-to-follow "><b>Who to follow</b></li>
            {
            whoArray.map(who =>
                <WhoToFollowListItem
                key = {who._id}
                who = {who}
                />
            )
        }
        </ul>
    );
}

export default WhoToFollowList;
