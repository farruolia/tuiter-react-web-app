import React from "react";
import './../styles.css';

const PostListItem = ({
                          post = {
                              id: 567,
                              avatar: '/images/elon.jpeg',
                              userName: 'Elon Musk',
                              handle: '@elonmusk',
                              time: '23h',
                              tweet: 'Amazing show about @Inspiration4x mission!',
                              image: '../../images/inspiration4.jpeg',
                              title: 'Countdown: Inspiration4 Mission to Space | Netflix Official Site',
                              summary: 'From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...',
                              link: 'netflix.com',
                              comment: '4.2K',
                              retweet: '3.5K',
                              like: '37.5'
                          }
                      }) => {
    return (
        <div className="row wd-border">
            <div className="col-1">
                <img className="wd-avatar" src={post.avatar} alt=""/>
            </div>
            <div className="col-11">
                <div className="wd-float-left">
                    <b className="wd-float-left">{post.userName}<i className="bi bi-patch-check-fill wd-post-summary-spacing"></i></b>
                    <div className="wd-name wd-grey-text wd-float-left">
                        {post.handle}
                    </div>
                    <div className="wd-float-left wd-grey-text wd-post-summary-spacing">
                        • {post.time}
                    </div>
                    <div className="wd-float-right">
                        <i className="bi bi-three-dots wd-grey-text"></i>
                    </div>
                    <br></br>
                    <div>
                        {post.tweet}
                    </div>
                    <br></br>
                    <div className="card wd-card-border">
                        <img className="card-img-top wd-picture-border-full" src={post.image} alt="..."/>
                        <div className="card-body">
                            <div className="card-text">
                                {post.title}
                            </div>
                            <div className="card-text wd-grey-text">
                                {post.summary}
                            </div>
                            <div className="card-text wd-grey-text">
                                {post.link}
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="wd-float-left wd-symbols">
                        <div className="wd-float-left">
                            <i className="bi bi-chat wd-grey-text"></i>
                            <a className="wd-icons-text" href="#">
                                {post.comment}
                            </a>
                        </div>
                        <div className="wd-float-left">
                            <a href="#"><img src="/images/retweet.png" alt=""/></a>
                            <a className="wd-icons-text" href="#">
                                {post.retweet}
                            </a>
                        </div>
                        <div className="wd-float-left">
                            <i className="bi bi-heart wd-grey-text"></i>
                            <a className="wd-icons-text wd-heart" href="#">
                                {post.like}
                            </a>
                        </div>
                        <div className="wd-float-left">
                            <i className="bi bi-share wd-grey-text"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PostListItem;