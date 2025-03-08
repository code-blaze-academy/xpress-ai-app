

import { BrowserRouter as Router, Routes , Route } from "react-router-dom"
import { Signup } from "../pages/auth/Signup";
import { Login } from "../pages/auth/Login";


// import Home from "../portal/pages/Home";

const IndexRoute  =  () => {
return (
 <Router>
    <Routes>
        {/* AUTH ROUTES */}
        {/* <Route path="/" element ={<} /> */}
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login/>} />

        
        
        {/* Not found Routes */}
        {/* <Route path="*" element={<NotFound/>}/> */}
    </Routes>
 </Router>
)
}

export default IndexRoute;