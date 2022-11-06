const NavigationSidebar = (active) => {
    if (active === "explore") {
        return(`
            <div class="list-group">
                <a class="list-group-item"><i class="fab fa-twitter"></i></a>
                <a href="../homeScreen/index.html" class="list-group-item list-group-item-action ">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa fa-home wd-float-left" style="margin-top: 2.5px; margin-right: 10px;"></i>
                        </div>
                        <div class="col-2 d-none d-sm-none d-md-none d-lg-block" style="font-weight: 100">
                            Home
                        </div>
                    </div>
                </a>
                <a href="../exploreOld/index.html" class="list-group-item list-group-item-action active">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa fa-hashtag wd-float-left" style="margin-top: 2.5px; margin-right: 10px;"></i>
                        </div>
                        <div class="col-2 d-none d-sm-none d-md-none d-lg-block">
                            Explore
                        </div>
                    </div>
                </a>
                <a href="../exploreOld/notifications.html" class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa fa-bell wd-float-left" style="margin-top: 2.5px; margin-right:10px;"></i>
                        </div>
                        <div class="col-2 d-none d-sm-none d-md-none d-lg-block" style="font-weight: 100">
                            Notifications
                        </div>
                    </div> 
                </a>
                <a href="../exploreOld/messages.html" class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa fa-envelope wd-float-left" style="margin-top: 2.5px; margin-right: 10px;"></i>
                        </div>
                        <div class="col-2 d-none d-sm-none d-md-none d-lg-block" style="font-weight: 100">
                            Messages
                        </div>
                    </div>
                </a>
                <a href="../bookmarks/index.html" class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa fa-bookmark wd-float-left" style="margin-top: 2.5px; margin-right: 10px;"></i>
                        </div>
                        <div class="col-2 d-none d-sm-none d-md-none d-lg-block" style="font-weight: 100">
                            Bookmarks
                        </div>
                    </div>
                </a>
                <a href="../exploreOld/lists.html" class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa fa-list wd-float-left" style="margin-top: 2.5px; margin-right: 10px;"></i>
                        </div>
                        <div class="col-2 d-none d-sm-none d-md-none d-lg-block" style="font-weight: 100">
                            Lists
                        </div>
                    </div>
                </a>
                <a href="../exploreOld/profile.html" class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa fa-user wd-float-left" style="margin-top: 2.5px; margin-right: 10px;"></i> 
                        </div>
                        <div class="col-2 d-none d-sm-none d-md-none d-lg-block" style="font-weight: 100">
                            Profile
                        </div>
                    </div>
                </a>
                <a href="../exploreOld/more.html" class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa fa-ellipsis-h wd-float-left" style="margin-top: 2.5px; margin-right: 10px;"></i>
                        </div>
                        <div class="col-2 d-none d-sm-none d-md-none d-lg-block" style="font-weight: 100">
                            More
                        </div>
                    </div>
                </a>
            </div>
            <div class="d-grid gap-2">
                <button class="btn btn-primary btn-block rounded-pill wd-tuiter-button">
                    Tuit
                </button>
            </div>
        `);
    }
    else {
        return(`
            <div class="list-group">
                <a class="list-group-item"><i class="fab fa-twitter"></i></a>
                <a href="../homeScreen/index.html" class="list-group-item list-group-item-action active">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa fa-home wd-float-left" style="margin-top: 2.5px; margin-right: 10px;"></i>
                        </div>
                        <div class="col-2 d-none d-sm-none d-md-none d-lg-block" style="font-weight: 100">
                            Home
                        </div>
                    </div>
                </a>
                <a href="../exploreOld/index.html" class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa fa-hashtag wd-float-left" style="margin-top: 2.5px; margin-right: 10px;"></i>
                        </div>
                        <div class="col-2 d-none d-sm-none d-md-none d-lg-block">
                            Explore
                        </div>
                    </div>
                </a>
                <a href="../exploreOld/notifications.html" class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa fa-bell wd-float-left" style="margin-top: 2.5px; margin-right:10px;"></i>
                        </div>
                        <div class="col-2 d-none d-sm-none d-md-none d-lg-block" style="font-weight: 100">
                            Notifications
                        </div>
                    </div> 
                </a>
                <a href="../exploreOld/messages.html" class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa fa-envelope wd-float-left" style="margin-top: 2.5px; margin-right: 10px;"></i>
                        </div>
                        <div class="col-2 d-none d-sm-none d-md-none d-lg-block" style="font-weight: 100">
                            Messages
                        </div>
                    </div>
                </a>
                <a href="../bookmarks/index.html" class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa fa-bookmark wd-float-left" style="margin-top: 2.5px; margin-right: 10px;"></i>
                        </div>
                        <div class="col-2 d-none d-sm-none d-md-none d-lg-block" style="font-weight: 100">
                            Bookmarks
                        </div>
                    </div>
                </a>
                <a href="../exploreOld/lists.html" class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa fa-list wd-float-left" style="margin-top: 2.5px; margin-right: 10px;"></i>
                        </div>
                        <div class="col-2 d-none d-sm-none d-md-none d-lg-block" style="font-weight: 100">
                            Lists
                        </div>
                    </div>
                </a>
                <a href="../exploreOld/profile.html" class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa fa-user wd-float-left" style="margin-top: 2.5px; margin-right: 10px;"></i> 
                        </div>
                        <div class="col-2 d-none d-sm-none d-md-none d-lg-block" style="font-weight: 100">
                            Profile
                        </div>
                    </div>
                </a>
                <a href="../exploreOld/more.html" class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col-2">
                            <i class="fa fa-ellipsis-h wd-float-left" style="margin-top: 2.5px; margin-right: 10px;"></i>
                        </div>
                        <div class="col-2 d-none d-sm-none d-md-none d-lg-block" style="font-weight: 100">
                            More
                        </div>
                    </div>
                </a>
            </div>
            <div class="d-grid gap-2">
                <button class="btn btn-primary btn-block rounded-pill wd-tuiter-button">
                    Tuit
                </button>
            </div>
        `);
    }
}
export default NavigationSidebar;