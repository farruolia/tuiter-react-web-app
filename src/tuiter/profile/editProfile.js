import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "./profileReducer";

const EditProfile = () => {
    const profile = useSelector(state => state.profile)
    const navigate = useNavigate();
    const navigateToProfile = () => {
        // navigate to /profile
        navigate('/tuiter/profile');
    };
    const [edit, setEdit] = useState({profile: profile});
    const editChangeHandler = (event) => {
        let editValue = event.target.value;
        let newEdit;
        if(event.target.id === "firstName") {
            newEdit = {
                profile: {
                    ...edit.profile,
                    firstName: editValue
                }
            };
            setEdit(newEdit);
        }
        else if(event.target.id === "lastName") {
            newEdit = {
                profile: {
                    ...edit.profile,
                    lastName: editValue
                }
            };
            setEdit(newEdit);
        }
        else if(event.target.id === "bio") {
            newEdit = {
                profile: {
                    ...edit.profile,
                    bio: editValue
                }
            };
            setEdit(newEdit);
        }
        else if(event.target.id === "location") {
            newEdit = {
                profile: {
                    ...edit.profile,
                    location: editValue
                }
            };
            setEdit(newEdit);
        }
        else if(event.target.id === "website") {
            newEdit = {
                profile: {
                    ...edit.profile,
                    website: editValue
                }
            };
            setEdit(newEdit);
        }
        else if(event.target.id === "dateOfBirth") {
            newEdit = {
                profile: {
                    ...edit.profile,
                    dateOfBirth: editValue
                }
            };
            setEdit(newEdit);
        }
    }
    const dispatch = useDispatch();
    const createEditClickHandler = () => {
        dispatch(updateProfile(edit))
    }

    return (
        <>
            <div className="row mb-2">
                <div className="col">
                    <i className="bi bi-x-lg"
                       onClick={navigateToProfile}></i>
                </div>
                <div className="col-9">
                    <b>Edit Profile</b>
                </div>
                <div className="col">
                    <Link to="/tuiter/profile">
                        <button className="btn btn-dark rounded-pill" onClick={createEditClickHandler}>
                            Save
                        </button>
                    </Link>
                </div>
            </div>

            <div className="row mb-5">
                <div className="position-relative">
                    <img className="w-100" src={`/images/${profile.bannerPicture}`} alt=""/>
                    <img className="position-absolute wd-nudge-down-profile wd-profile-photo" src={`/images/${profile.profilePicture}`} alt=""/>
                </div>
            </div>

            <br></br>

            <form>
                <div className="mb-3 form-floating">
                    <input type="text" className="form-control" id="firstName" defaultValue={edit.profile.firstName}
                           onChange={editChangeHandler}/>
                    <label htmlFor="floatingInputValue">First Name</label>
                </div>
                <div className="mb-3 form-floating">
                    <input type="text" className="form-control" id="lastName" defaultValue={edit.profile.lastName}
                           onChange={editChangeHandler}/>
                    <label htmlFor="floatingInputValue">Last Name</label>
                </div>
                <div className="mb-3 form-floating">
                    <input type="text" className="form-control" id="bio" defaultValue={edit.profile.bio}
                           onChange={editChangeHandler}/>
                    <label htmlFor="floatingInputValue">Bio</label>
                </div>
                <div className="mb-3 form-floating">
                    <input type="text" className="form-control" id="location" defaultValue={edit.profile.location}
                           onChange={editChangeHandler}/>
                    <label htmlFor="floatingInputValue">Location</label>
                </div>
                <div className="mb-3 form-floating">
                    <input type="text" className="form-control" id="website" defaultValue={edit.profile.website}
                           onChange={editChangeHandler}/>
                    <label htmlFor="floatingInputValue">Website</label>
                </div>
                <div className="mb-3 form-floating">
                    <input type="date" className="form-control" id="dateOfBirth" value={edit.profile.dateOfBirth}
                           onChange={editChangeHandler}/>
                    <label htmlFor="floatingInputValue">Date of Birth</label>
                </div>
            </form>
        </>
    )
}

export default EditProfile;