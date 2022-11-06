import React from "react";
import './../styles.css';
import TuitStats from "./tuitStats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuitsReducer";

const TuitItem = ({
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
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img className="wd-avatar" src={`/images/${post.image}`} alt=""/>
                </div>
                <div className="col-10 wd-posts-spacing">
                    <b className="wd-float-left">{post.userName}<i className="bi bi-patch-check-fill wd-post-summary-spacing" style={{color: "#0275d8"}}></i></b>
                    <div className="wd-name wd-grey-text wd-float-left">
                        {post.handle}
                    </div>
                    <div className="wd-float-left wd-grey-text wd-post-summary-spacing">
                        • {post.time}
                    </div>

                    <br></br>
                    <div>
                        {post.tuit}
                    </div>
                    <br></br>
                    <TuitStats post={post}/>
                    <div className="wd-float-done"></div>
                </div>
                <div className="col">
                    <div className="wd-float-right">
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(post._id)}></i>
                    </div>
                </div>
            </div>
        </li>
    )
}
export default TuitItem;