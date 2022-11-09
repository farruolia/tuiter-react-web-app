import Nav from "../Nav";
import {Route, Routes} from "react-router";
import Assignment7 from "./a7/index";
import Assignment6 from "./a6";

function Labs() {
    return (
        <div>
            <Nav/>
            <Routes>
                <Route path="/"
                       element={<Assignment6/>}/>
                <Route path="a7" element={<Assignment7/>}/>
            </Routes>
        </div>
    );
}
export default Labs;