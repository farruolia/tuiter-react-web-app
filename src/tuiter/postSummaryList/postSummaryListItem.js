import React from "react";
import './../styles.css';

const PostSummaryListItem = ({
                                 post = {
                                     _id: 892,
                                     topic: "Space",
                                     userName: "SpaceX",
                                     time: "2h",
                                     title: "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
                                     image: "tesla.png",
                                     tuit: 'From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space mission.'
                                 }
                             }) => {

    return (
        <li className="list-group-item">
            <div className="card-body">
                <div className="row">
                    <div className="col-9">
                        <div className="wd-grey-text">
                            {post.topic} - {post.time}
                        </div>
                        <div className="fw-bolder">{post.userName}<i className="bi bi-patch-check-fill wd-post-summary-spacing"></i>
                        </div>
                        <div>{post.tuit}</div>
                    </div>
                    <div className="col-3 align-self-center d-flex justify-content-end">
                        <img className="wd-for-you-posts-image float-end rounded-3" width={70} src={`/images/${post.image}`} alt=""/>
                    </div>
                </div>
            </div>
        </li>
    )
}
export default PostSummaryListItem;