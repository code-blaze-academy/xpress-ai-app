import { Flex, Box } from "@chakra-ui/react";
import CollapsibleSidebar from "../components/dashboard/CollapsibleSideBar";
import { HeaderBar } from "../components/dashboard/HeaderBar";
import { Outlet } from "react-router-dom";



export const DashboardLayout = () => {
  return (
    <Flex height="100vh" overflow="hidden">
      <CollapsibleSidebar />
      <Flex direction="column" flex="1" overflow="hidden" bg={"#0E1117"}>
        <Box>
           <HeaderBar/>
        </Box>
        <Box height={"100vh"} overflowY="auto">
          <Outlet/>
        </Box>
      </Flex>
    </Flex>
  );
}
