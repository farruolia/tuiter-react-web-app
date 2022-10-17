const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item">
            <div class="card-body">
                <div class="row">
                    <div class="col-9">
                        <div class="wd-grey-text">
                            ${post.topic}
                        </div>
                        <div class="wd-float-left">
                            <b class="wd-float-left">${post.userName}<i class="fa fa-check-circle" style="padding-left: 5px;"></i></b>
                            <div class="wd-float-left wd-grey-text" style="padding-left: 5px;">
                                - ${post.time}
                            </div>
                        </div>
                        <div class="wd-float-done"></div>
                        <b>${post.title}</b>
                    </div>
                    <div class="col-3 align-self-center d-flex justify-content-end">
                        <img class="wd-for-you-posts-image" src=${post.image} alt="" />
                    </div>
                </div>
            </div>
        </li>
    `);
}
export default PostSummaryItem;