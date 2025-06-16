
import { useEffect, useState } from "react";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import { Button, Spinner } from "@chakra-ui/react";



const GoogleAuth = () => {
  const[user, setUser] = useState([])
  const[profile,setProfile] = useState([]);
  const[loading, setLoading] =  useState(false)

  //login function 
  const login = useGoogleLogin({
    onSuccess : (codeResponse ) => setUser(codeResponse),
    onError : (error) => console.log(`Login Failed ${error}`)
  })

 
  useEffect(() => {
   const fetchUserDetails = async() => {
    const config = {
        headers:{
           Authorization:`Bearer ${user.access_token}`,
           Accept:"application/json"
        }
       }
      try{
        setLoading(true)
        if(user){
            const response = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user?.access_token}`,
            config
            );
            const data = await response.data;
            setProfile(data)
           }
      }
      catch(error){
        console.log(error)
      }
      finally{
        setLoading(false)
      }
   }

   fetchUserDetails();

  },[user])

  console.log(profile)

  return (
  <Button
    leftIcon={loading ? <Spinner size="sm" /> : <FcGoogle />}
    borderRadius="8px"
    onClick={() => login()}
    // onClick={(e) => {
    //  e.preventDefault();
    //  login();
    //   }}
     border="1px solid rgba(158, 158, 158, 0.20)"
   //  border="1px solid rgba(158, 158, 158, 0.20)"
   _hover={{
   // bgGradient: "linear(to-r, #173685 0%, rgba(23, 54, 133, 0.70) 50%, #718517 100%)",
     }}
   >
    Continue with Google
  </Button>
  );
};

export default GoogleAuth;
