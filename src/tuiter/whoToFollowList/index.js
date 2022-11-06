import React from "react";
import {useSelector} from "react-redux";
import WhoToFollowListItem from "./whoToFollowListItem";

const WhoToFollowList = () => {
    const whoArray = useSelector(state => state.who)
    return (
        <ul className="list-group">
            <li className="list-group-item"><b>Who to follow</b></li>
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
