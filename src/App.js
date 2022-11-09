import './App.css';
import Labs from "./labs";
import HelloWorld from "./labs/a6/helloWorld";
import Tuiter from "./tuiter";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route index path="/*"
                         element={<Labs/>}/>
                  <Route path="/hello"
                         element={<HelloWorld/>}/>
                  <Route path="/tuiter/*"
                         element={<Tuiter/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}
export default App;
