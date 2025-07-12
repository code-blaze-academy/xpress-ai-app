

import { BrowserRouter as Router, Routes , Route, Navigate } from "react-router-dom"
import { Signup } from "../pages/auth/Signup";
import { Login } from "../pages/auth/Login";
import Index from "../pages/home";
import DashboardIndex from "../pages/dashboard";
import Simple from "../pages/dashboard/TestingComponents";
import { DashboardLayout } from "../layouts/DashboardLayout";
import useUserStore from "../hooks/storage/userStore";



// import Home from "../portal/pages/Home";

const IndexRoute  =  () => {
const { user } = useUserStore((state) => state);
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



        <Route path="/dashboard" element={
         !user ? <Navigate to={"/login"} /> : (
        <DashboardLayout>
           <DashboardIndex/>
         </DashboardLayout>
         )
        }>
       
        </Route>

        
        
        {/* Not found Routes */}
        {/* <Route path="*" element={<NotFound/>}/> */}
    </Routes>
 </Router>
)
}

export default IndexRoute;