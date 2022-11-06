import {createSlice} from "@reduxjs/toolkit";

const userProfile = {
    _id: "123",
    firstName: 'Farida',
    lastName: 'Olia',
    handle: '@farruolia',
    profilePicture: 'farru.jpeg',
    bannerPicture: 'farrubanner.jpeg',
    bio: "Master's in Computer Science at Northeastern University. \n Summer 2022 Intern at WePay, JPMorgan Chase.",
    website: 'www.linkedin.com/in/faridaolia',
    location: 'Boston, MA',
    dateOfBirth: '1998-03-29',
    dateJoined: '2009-04',
    followingCount: 540,
    followersCount: 515,
    tweetCount: 6799,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState: userProfile,
    reducers: {
        updateProfile(state, action) {
            return action.payload.profile
        }
    }
});

export const {updateProfile} = profileSlice.actions
export default profileSlice.reducer;