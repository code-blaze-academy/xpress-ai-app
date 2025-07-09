

import { BrowserRouter as Router, Routes , Route } from "react-router-dom"
import { Signup } from "../pages/auth/Signup";
import { Login } from "../pages/auth/Login";
import Index from "../pages/home";
import DashboardIndex from "../pages/dashboard";
import Simple from "../pages/dashboard/TestingComponents";


// import Home from "../portal/pages/Home";

const IndexRoute  =  () => {
return (
 <Router>
    <Routes>
        {/* AUTH ROUTES */}
        {/* <Route path="/" element ={<} /> */}
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<Index />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login/>} />
        <Route path="testing" element={<Simple/>}/>



        <Route path="/dashboard" element={<DashboardIndex/>}>
       
        </Route>

        
        
        {/* Not found Routes */}
        {/* <Route path="*" element={<NotFound/>}/> */}
    </Routes>
 </Router>
)
}

export default IndexRoute;