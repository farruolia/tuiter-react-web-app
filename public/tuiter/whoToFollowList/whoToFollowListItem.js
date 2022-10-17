const WhoToFollowListItem = (who) => {
    return(`
    
    <li class="list-group-item wd-list-group-who-to-follow ">
        <div class="row">
            <div class="col-2 col-sm-3 col-md-3 col-lg-3 col-xl-2 align-self-center">
                <img class="wd-follow-avatar" src=${who.avatarIcon} alt="" />
            </div>
            <div class="col-7 col-sm-5 col-md-5 col-lg-5 col-xl-7">
                <div class="row">
                    <b style="margin-left: -10px;">${who.userName} <i class="fa fa-check-circle"></i></b>
                </div>
                <div class="row .wd-tiny-grey-text">
                    ${who.handle}
                </div>
            </div>
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 align-self-center">
                <button class="btn btn-primary btn-block rounded-pill">
                    Follow
                </button>
            </div>
        </div>
    </li>
    `);
}
export default WhoToFollowListItem;