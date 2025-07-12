import { Flex, Box } from "@chakra-ui/react";
import CollapsibleSidebar from "../components/dashboard/CollapsibleSideBar";
import { HeaderBar } from "../components/dashboard/HeaderBar";



export const DashboardLayout = ({ children }) => {
  return (
    <Flex height="100vh" overflow="hidden">
      <CollapsibleSidebar />
      <Flex direction="column" flex="1" overflow="hidden">
        <HeaderBar />
        <Box flex="1" overflowY="auto" p={4}>
          {children}
        </Box>
      </Flex>
    </Flex>
  );
}
