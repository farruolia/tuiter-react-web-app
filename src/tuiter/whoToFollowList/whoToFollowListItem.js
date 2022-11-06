import React from "react";
import './../styles.css';

const WhoToFollowListItem = ({
                                 who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png' }
                             }) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-2 col-sm-3 col-md-3 col-lg-3 col-xl-2 align-self-center">
                    <img className="rounded-circle" width={50} src={`/images/${who.avatarIcon}`} alt=""/>
                </div>
                <div className="col-7 col-sm-5 col-md-5 col-lg-5 col-xl-7">
                    <div className="row">
                        <div className="fw-bold wd-username-spacing">{who.userName} <i className="fa fa-check-circle"></i></div>
                    </div>
                    <div className="row .wd-tiny-grey-text">
                        @{who.handle}
                    </div>
                </div>
                <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 align-self-center">
                    <button className="btn btn-primary btn-block rounded-pill">
                        Follow
                    </button>
                </div>
            </div>
        </li>
    );
}

export default WhoToFollowListItem;