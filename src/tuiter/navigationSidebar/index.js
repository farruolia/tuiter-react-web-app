import React from "react";
import './../styles.css';
import {useLocation} from "react-router";
import {Link} from "react-router-dom";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div>
            <div className="list-group">
                <a className="list-group-item list-group-item-action">
                    <div className="row">
                        <div className="col-2">
                            <i className="bi bi-twitter wd-icon-spacing wd-float-left"></i>
                        </div>
                        <div className="col-2 d-none d-sm-none d-md-none d-lg-block">
                            Tuiter
                        </div>
                    </div>
                </a>
                <Link to="/tuiter/home" className={`list-group-item list-group-item-action 
                    ${active === '' ?'active':''} ${active === 'home' ?'active':''}`}>
                    <div className="row">
                        <div className="col-2">
                            <i className="bi bi-house-door-fill wd-float-left"></i>
                        </div>
                        <div className="col-2 d-none d-sm-none d-md-none d-lg-block">
                            Home
                        </div>
                    </div>
                </Link>
                <Link to="/tuiter/explore" className={`list-group-item list-group-item-action 
                    ${active === 'explore'?'active':''}`}>
                    <div className="row">
                        <div className="col-2">
                            <i className="bi bi-hash wd-float-left"></i>
                        </div>
                        <div className="col-2 d-none d-sm-none d-md-none d-lg-block">
                            Explore
                        </div>
                    </div>
                </Link>
                <Link to="/" className={`list-group-item list-group-item-action 
                    ${active === 'labs'?'active':''}`}>
                    <div className="row">
                        <div className="col-2">
                            <i className="bi bi-asterisk wd-float-left"></i>
                        </div>
                        <div className="col-2 d-none d-sm-none d-md-none d-lg-block">
                            Labs
                        </div>
                    </div>
                </Link>
                <a className={`list-group-item list-group-item-action 
                    ${active === 'notifications'?'active':''}`}>
                    <div className="row">
                        <div className="col-2">
                            <i className="bi bi-bell-fill wd-float-left"></i>
                        </div>
                        <div className="col-2 d-none d-sm-none d-md-none d-lg-block">
                            Notifications
                        </div>
                    </div>
                </a>
                <a className={`list-group-item list-group-item-action 
                    ${active === 'messages'?'active':''}`}>
                    <div className="row">
                        <div className="col-2">
                            <i className="bi bi-envelope-fill wd-float-left"></i>
                        </div>
                        <div className="col-2 d-none d-sm-none d-md-none d-lg-block">
                            Messages
                        </div>
                    </div>
                </a>
                <a className={`list-group-item list-group-item-action 
                    ${active === 'bookmarks'?'active':''}`}>
                    <div className="row">
                        <div className="col-2">
                            <i className="bi bi-bookmark-fill wd-float-left"></i>
                        </div>
                        <div className="col-2 d-none d-sm-none d-md-none d-lg-block">
                            Bookmarks
                        </div>
                    </div>
                </a>
                <a className={`list-group-item list-group-item-action 
                    ${active === 'lists'?'active':''}`}>
                    <div className="row">
                        <div className="col-2">
                            <i className="bi bi-list wd-float-left"></i>
                        </div>
                        <div className="col-2 d-none d-sm-none d-md-none d-lg-block">
                            Lists
                        </div>
                    </div>
                </a>
                <Link to="/tuiter/profile" className={`list-group-item list-group-item-action 
                    ${active === 'profile'?'active':''}`}>
                    <div className="row">
                        <div className="col-2">
                            <i className="bi bi-person-fill wd-float-left"></i>
                        </div>
                        <div className="col-2 d-none d-sm-none d-md-none d-lg-block">
                            Profile
                        </div>
                    </div>
                </Link>
                <a className={`list-group-item list-group-item-action 
                    ${active === 'more'?'active':''}`}>
                    <div className="row">
                        <div className="col-2">
                            <i className="bi bi-three-dots wd-float-left"></i>
                        </div>
                        <div className="col-2 d-none d-sm-none d-md-none d-lg-block">
                            More
                        </div>
                    </div>
                </a>
            </div>
        </div>

    );
}

export default NavigationSidebar;