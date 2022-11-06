import React from "react";
import dateFormat from "dateformat";

const ProfileDetails = ({profile}) => {
    const dob = dateFormat(profile.dateOfBirth+"T08:59:00.000Z", "mmmm dS, yyyy")
    const doj = dateFormat(profile.dateJoined+"T08:59:00.000Z", "mmmm, yyyy")
    return (
        <>
            <div className="row mb-3">
                <b>{profile.firstName} {profile.lastName}</b>
                <div className="wd-tiny-grey-text">{profile.handle}</div>
            </div>

            <div className="row mb-3">
                <div >{profile.bio}</div>
            </div>

            <div className="row mb-3">
                <div className="wd-float-left wd-symbols">
                    <div className="wd-float-left">
                        <i className="bi bi-geo-alt wd-grey-text wd-float-left"></i>
                        <a className="wd-icons-text" href="#">
                            {profile.location}
                        </a>
                    </div>
                    <div className="wd-float-left">
                        <i className="bi bi-balloon wd-grey-text"></i>
                        <a className="wd-icons-text" href="#">
                            {dob}
                        </a>
                    </div>
                    <div className="wd-float-left">
                        <i className="bi bi-calendar wd-grey-text"></i>
                        <a className="wd-icons-text" href="#">
                            Joined {doj}
                        </a>
                    </div>
                </div>
            </div>

            <div className="row mb-3">
                <div className="wd-float-left wd-symbols">
                    <div className="wd-float-left">
                        <p className="wd-tiny-grey-text">
                            <b>{profile.followingCount}</b> Following
                        </p>
                    </div>
                    <div className="wd-float-left" style={{paddingLeft: "10px"}}>
                        <p className="wd-icons-text wd-tiny-grey-text">
                            <b>{profile.followersCount}</b> Followers
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileDetails;