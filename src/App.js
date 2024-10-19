import {  useEffect } from "react"



import { Route, Routes} from "react-router-dom";

import Home from "./pages/Home";
import Easy from "./component/Easy";
import Medium from "./component/Medium";
import Hard from "./component/Hard";
import ShowDetails from "./component/ShowDetails";


export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/easyAssignment" element={<Easy />} />
        <Route path="/mediumAssignment" element={<Medium />} />
        <Route path="/mediumAssignment/:id" element={<ShowDetails />} />
        <Route path="/hardAssignment" element={<Hard />} />
      </Routes>

    </>

  )
}
