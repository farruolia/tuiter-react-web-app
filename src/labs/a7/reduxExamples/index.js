import React from "react";
import HelloReduxExampleComponent from "./helloReduxExampleComponent";
import hello from "./reducers/hello";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import Todos from "./todosComponent";
import todos from "./reducers/todosReducer";


const store = configureStore({
    reducer: {hello, todos}
});

const ReduxExamples = () => {
    return(
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <Todos/>
                <HelloReduxExampleComponent/>
            </div>
        </Provider>
    );
};
export default ReduxExamples;