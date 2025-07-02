import { Box, Heading, Text } from "@chakra-ui/react";
import ChatDashboard from "./ChatDashboard";



const DashboardIndex = () => {

    const user = JSON.parse(localStorage.getItem("user"));
  return (
    <ChatDashboard/>
  )
}

export default DashboardIndex;