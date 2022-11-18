import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./tuitService"
import {createTuit} from "./tuitService";

// create thunk for findTuits
export const findTuitsThunk = createAsyncThunk(
    // give unique name, thunk invokes
    'tuits/findTuits', async () =>
        // service function. Returned data goes in redux action's payload
        await service.findTuits()
    )

export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit', async (tuitId) => {
        await service.deleteTuit(tuitId)
        return tuitId
    })

export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit', async (tuit) => {
            const newTuit = await service.createTuit(tuit)
        console.log(newTuit);
            return newTuit
    })

export const updateTuitThunk = createAsyncThunk(
        'tuits/updateTuit', async (tuit) =>
            await service.updateTuit(tuit)
    )



