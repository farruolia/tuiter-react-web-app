import React from "react";
import '../styles.css';
import {likeToggle} from "./tuitsReducer";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuitThunks";

const TuitStats = ({
                          post = {
                              _id: 567,
                              topic: "Space",
                              userName: 'Elon Musk',
                              time: '23h',
                              title: 'Countdown: Inspiration4 Mission to Space | Netflix Official Site',
                              image: 'elon.jpeg',
                              liked: true,
                              disliked: true,
                              replies: 890,
                              retuits: '3.5K',
                              likes: 37.5,
                              dislikes: 464,
                              handle: '@elonmusk',
                              tuit: 'From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space mission.',
                          }
                      }) => {
    const dispatch = useDispatch();
    let updateLikes;
    let updateDislikes;
    const toggleLike = (post) => {
        dispatch(likeToggle(post))
    }
    return (
        <div className="wd-float-left wd-symbols">
            <div className="wd-float-left">
                <i className="bi bi-chat wd-grey-text"></i>
                <a className="wd-icons-text" href="">
                    {post.replies}
                </a>
            </div>
            <div className="wd-float-left">
                <i className="bi bi-arrow-repeat wd-grey-text"></i>
                <a className="wd-icons-text" href="">
                    {post.retuits}
                </a>
            </div>
            <div className="wd-float-left">
                <i className={post.liked?"bi bi-heart-fill" : "bi bi-heart wd-grey-text"}
                   style={{color: post.liked? 'red': ''}}
                   onClick={() => {
                       if (post.liked){
                           updateLikes = post.likes - 1
                       }
                       else {
                           updateLikes = post.likes + 1
                       }
                       dispatch(updateTuitThunk({
                           ...post,
                           likes: updateLikes,
                           liked: !post.liked
                       }))
                   }}>
                </i>
                <a className="wd-icons-text wd-heart" href="">
                    {post.likes}
                </a>
            </div>
            <div className="wd-float-left">
                <i className={post.disliked?"bi bi-hand-thumbs-down-fill" : "bi bi-hand-thumbs-down wd-grey-text"}
                   style={{color: post.disliked? 'royalblue': ''}}
                   onClick={() => {
                       if (post.disliked){
                           updateDislikes = post.dislikes - 1
                       }
                       else {
                           updateDislikes = post.dislikes + 1
                       }
                       dispatch(updateTuitThunk({
                           ...post,
                           dislikes: updateDislikes,
                           disliked: !post.disliked
                       }))
                   }}>
                </i>
                <a className="wd-icons-text wd-heart" href="">
                    {post.dislikes}
                </a>
            </div>
            <div className="wd-float-left">
                <i className="bi bi-share wd-grey-text"></i>
            </div>
        </div>
    )
}
export default TuitStats;