import React from "react";
import '../styles.css';
import {likeToggle} from "./tuitsReducer";
import {useDispatch} from "react-redux";

const TuitStats = ({
                          post = {
                              _id: 567,
                              topic: "Space",
                              userName: 'Elon Musk',
                              time: '23h',
                              title: 'Countdown: Inspiration4 Mission to Space | Netflix Official Site',
                              image: 'elon.jpeg',
                              liked: true,
                              replies: 890,
                              retuits: '3.5K',
                              likes: 37.5,
                              handle: '@elonmusk',
                              tuit: 'From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space mission.',
                          }
                      }) => {
    const dispatch = useDispatch();
    const toggleLike = (post) => {
        dispatch(likeToggle(post))
    }
    return (
        <div className="wd-float-left wd-symbols">
            <div className="wd-float-left">
                <i className="bi bi-chat wd-grey-text"></i>
                <a className="wd-icons-text" href="src/tuiter/tuits/tuitStats#">
                    {post.replies}
                </a>
            </div>
            <div className="wd-float-left">
                <i className="bi bi-arrow-repeat wd-grey-text"></i>
                <a className="wd-icons-text" href="src/tuiter/tuits/tuitStats#">
                    {post.retuits}
                </a>
            </div>
            <div className="wd-float-left">
                <i className={post.liked?"bi bi-heart-fill" : "bi bi-heart wd-grey-text"} onClick={() =>
                    toggleLike(post)} style={{color: post.liked? 'red': ''}}></i>
                <a className="wd-icons-text wd-heart" href="src/tuiter/tuits/tuitStats#">
                    {post.likes}
                </a>
            </div>
            <div className="wd-float-left">
                <i className="bi bi-share wd-grey-text"></i>
            </div>
        </div>
    )
}
export default TuitStats;