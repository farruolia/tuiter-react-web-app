import PostListItem from "./postListItem.js";
import post from "./post.js";

const PostList = () => {
    return(`
        <ul class="list-group">
                ${
                    post.map(post => {
                        return(PostListItem(post));
                    }).join('')
                }
        </ul>
   `);
}

export default PostList;