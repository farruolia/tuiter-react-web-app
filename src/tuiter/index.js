import NavigationSidebar from "./navigationSidebar";
import WhoToFollowList from "./whoToFollowList";
import ExploreComponent from "./explore";
import HomeComponent from "./home";
import {Route, Routes} from "react-router-dom";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import whoReducer from "./reducers/whoReducer";
import tuitsReducer from "./tuits/tuitsReducer";
import ProfileComponent from "./profile";
import profileReducer from "./profile/profileReducer";
import EditProfile from "./profile/editProfile";
import React from "react";

const store = configureStore({
    reducer: {who: whoReducer, tuits: tuitsReducer, profile: profileReducer}
});

function Tuiter() {
    return(
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar/>
                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                     style={{"position": "relative"}}>
                    <Routes>
                        <Route index element={<HomeComponent/>}/>
                        <Route path="home"    element={<HomeComponent/>}/>
                        <Route path="explore" element={<ExploreComponent/>}/>
                        <Route path="profile" element={<ProfileComponent/>}/>
                        <Route path="/edit-profile" element={<EditProfile />} />
                    </Routes>
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>
    );
}
export default Tuiter