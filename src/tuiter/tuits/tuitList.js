import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TuitItem from "./tuitItem";
import {findTuitsThunk} from "../../services/tuitThunks";

const TuitList = () => {
    const {tuits, loading} = useSelector(state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])
    // if loading flag is true, then show a loading message while data is still coming back from the server
    return (
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                tuits.map((post) =>
                    <TuitItem
                        key={post._id}
                        post={post}
                    />
                )
            }
        </ul>
    )
}

export default TuitList