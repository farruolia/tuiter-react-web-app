const PostListItem = (post) => {
    if (post.title === '' && post.summary === '') {
        return(`
            <div class="row wd-border">
                <div class="col-1">
                    <img class="wd-avatar" src=${post.avatar} alt=""/>
                </div>
                <div class="col-11">
                    <div class="wd-float-left">
                        <b class="wd-float-left">${post.userName}<i class="fa fa-check-circle" style="padding-left: 5px;"></i></b>
                        <div class="wd-name wd-grey-text wd-float-left">
                            ${post.handle}
                        </div>
                        <div class="wd-float-left wd-grey-text" style="padding-left: 5px;">
                            • ${post.time}
                        </div>
                        <div class="wd-float-right">
                            <i class="fa fa-ellipsis-h wd-grey-text" ></i>
                        </div>
                        <br>
                        <div>
                            ${post.tweet}
                        </div>
                        <br>
                        <div class="card wd-card-border">
                            <img class="card-img-top wd-picture-border" src=${post.image}  alt="...">
                        </div>
                        <br>
                        <div class="wd-float-left wd-symbols">
                            <div class="wd-float-left">
                                <i class="fa fa-comment wd-grey-text"></i>
                                <a class="wd-icons-text" href="#"> 
                                    ${post.comment}
                                </a>
                            </div>
                            <div class="wd-float-left">
                                <a href="#"><img src="../../images/retweet.png" alt=""/></a>
                                <a class="wd-icons-text" href="#"> 
                                    ${post.retweet}
                                </a>
                            </div>
                            <div class="wd-float-left">
                                <i class="fa fa-heart wd-grey-text"></i>
                                <a class="wd-icons-text wd-heart" href="#"> 
                                    ${post.like}
                                </a>
                            </div>
                            <div class="wd-float-left">
                            <i class="fa fa-share-from-square wd-grey-text"></i>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        `);
    }
    else {
        return(`
            <div class="row wd-border">
                <div class="col-1">
                    <img class="wd-avatar" src=${post.avatar} alt=""/>
                </div>
                <div class="col-11">
                    <div class="wd-float-left">
                        <b class="wd-float-left">${post.userName}<i class="fa fa-check-circle" style="padding-left: 5px;"></i></b>
                        <div class="wd-name wd-grey-text wd-float-left">
                            ${post.handle}
                        </div>
                        <div class="wd-float-left wd-grey-text" style="padding-left: 5px;">
                            • ${post.time}
                        </div>
                        <div class="wd-float-right">
                            <i class="fa fa-ellipsis-h wd-grey-text" ></i>
                        </div>
                        <br>
                        <div>
                            ${post.tweet}
                        </div>
                        <br>
                        <div class="card wd-card-border">
                            <img class="card-img-top wd-picture-border-full" src=${post.image}  alt="...">
                            <div class="card-body">
                                <div class="card-text">
                                    ${post.title}
                                </div>
                                <div class="card-text wd-grey-text">
                                    ${post.summary}
                                </div>
                                <div class="card-text wd-grey-text">
                                    ${post.link}
                                </div>
                            </div>
                        </div>
                        <br>
                        <div class="wd-float-left wd-symbols">
                            <div class="wd-float-left">
                                <i class="fa fa-comment wd-grey-text"></i>
                                <a class="wd-icons-text" href="#"> 
                                    ${post.comment}
                                </a>
                            </div>
                            <div class="wd-float-left">
                                <a href="#"><img src="../../images/retweet.png" alt=""/></a>
                                <a class="wd-icons-text" href="#"> 
                                    ${post.retweet}
                                </a>
                            </div>
                            <div class="wd-float-left">
                                <i class="fa fa-heart wd-grey-text"></i>
                                <a class="wd-icons-text wd-heart" href="#"> 
                                    ${post.like}
                                </a>
                            </div>
                            <div class="wd-float-left">
                            <i class="fa fa-share-from-square wd-grey-text"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `);
    }

}
export default PostListItem;