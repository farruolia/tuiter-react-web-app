import WhoToFollowListItem from "./whoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
    return(`
       <ul class="list-group">
       <li class="list-group-item wd-list-group-who-to-follow "><b>Who to follow</b></li>
        ${
            who.map(who => {
                return(WhoToFollowListItem(who));
            }).join('')
        }
       </ul>
   `);
}

export default WhoToFollowList;