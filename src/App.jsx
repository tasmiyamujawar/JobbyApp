import { Route,Routes } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Jobs from "./components/jobs";
import ProtectedRoute from "./components/protectedRoute";
import NotFound from "./components/notFound";
// import DetailedSection from "./components/detailedSection";

const App = ()=>(

  <>

          <Routes>

                  <Route path = "/" element = { <ProtectedRoute Component = {Home}/> }></Route>

                  <Route path = "/login" element = { <Login/> }></Route>

                  <Route path = "/jobs" element = { <ProtectedRoute Component = {Jobs}/> }></Route>

                  {/* <Route path = "/jobs/:id" element = { <ProtectedRoute Component = {DetailedSection}/> }></Route> */}


                  <Route path = "/*" element = { <NotFound/> }></Route>


          </Routes>
  
  </>

)



export default App;