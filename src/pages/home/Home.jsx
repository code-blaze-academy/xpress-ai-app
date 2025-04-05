import { Box, Text } from "@chakra-ui/react"
import CustomButton from "../../components/CustomButton"
import { FaArrowAltCircleDown } from "react-icons/fa"
import { FaRProject } from "react-icons/fa6"

const Home = () => {
  return (
    <Box>
       <Text textAlign={"center"}>Welcome to home page</Text> 
       <CustomButton 
         title="Book Now"
       />
    </Box>
  )
}

export default Home