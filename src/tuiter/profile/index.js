import React from "react";
import {useSelector} from "react-redux";
import ProfileDetails from "./profileDetails";
import {Link} from "react-router-dom";

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile)
    return (
        <>
            <div className="row mb-2">
                <b>{profile.firstName} {profile.lastName}</b>
                <div className="wd-tiny-grey-text">{profile.tweetCount} Tweets</div>
            </div>
            <div className="row mb-2">
                <div className="position-relative">
                    <img className="w-100" src={`/images/${profile.bannerPicture}`} alt=""/>
                    <img className="position-absolute wd-nudge-down-profile wd-profile-photo" src={`/images/${profile.profilePicture}`} alt=""/>
                </div>
            </div>
            <div className="row mb-2 wd-float-right">
                <Link to="/tuiter/edit-profile">
                    <button className="wd-edit-profile-spacing btn border rounded-pill">
                        <b>Edit Profile</b>
                    </button>
                </Link>
            </div>
            <div className="wd-float-done"></div>

            <ProfileDetails profile={profile}/>

        </>
    )
}

export default ProfileComponent;