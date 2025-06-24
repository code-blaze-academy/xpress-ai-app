import { Box, Heading, Text } from "@chakra-ui/react";



const DashboardIndex = () => {

    const user = JSON.parse(localStorage.getItem("user"));
  return (
    <Box textAlign={"center"}>
        <Heading as={"h4"} fontSize={"20px"} fontWeight={"500"} mb={2} color={"green.200"} marginTop={"24px"}>Hi {user?.data?.user?.email}</Heading>
        <Heading as={"h5"} mb={4} fontSize={"16px"}>Welcome  the X press AI User Dashboard</Heading>
        <Text>Dashboard Update in Progress</Text>
    </Box>

  )
}

export default DashboardIndex;