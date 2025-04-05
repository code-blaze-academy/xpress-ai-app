import { Box, Text } from "@chakra-ui/react"
import CustomButton from "../../components/CustomButton"
import { FaArrowAltCircleDown } from "react-icons/fa"
import { FaRProject } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"
import VideoIcon from "../../components/assets/icons/VideoIcon"

const Home = () => {
    const navigate = useNavigate();

     // Function to navigate to the registration page
     const handleTryForFree = () => {
      navigate("/register");
     };

  return (
    <Box>
       <Text textAlign={"center"} mb={"2rem"}>Welcome to home page</Text> 
       <CustomButton 
         title="Try for free"
         leftIcon={<VideoIcon width="24px" height="24px" />}
         onClick={handleTryForFree}
         borderRadius={"full"}
         display={"flex"}
         mx={"auto"}
         padding={"10px 20px"}
       />
    </Box>
  )
}

export default Home