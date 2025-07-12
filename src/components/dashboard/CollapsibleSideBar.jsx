
import {
  Box,
  IconButton,
  VStack,
  Tooltip,
  Collapse,
  Input,
  InputGroup,
  InputLeftElement,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiSearch,
  FiMessageCircle,
  FiPlus,
} from "react-icons/fi";
import { useState } from "react";
import SideBarIcon from "../assets/icons/SideBarIcon";
import NewChatIcon from "../assets/icons/NewChatIcon";
import CustomButton from "../CustomButton";

export default function CollapsibleSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });

  return (
    <Box
      w={isCollapsed ? "60px" : "250px"}
      transition="width 0.3s"
      bg="gray.800"
      color="white"
      minH="100vh"
      px={isCollapsed ? 2 : 4}
      py={4}
      position="fixed"
      left={0}
      top={0}
      zIndex={10}
    >
      <VStack align="start" spacing={4}>
        <IconButton
          // icon={isCollapsed ? <FiChevronRight /> : <FiChevronLeft />}
          icon={<SideBarIcon width="24px" height="25px"/>}
          aria-label="Toggle Sidebar"
          onClick={() => setIsCollapsed(!isCollapsed)}
          size="sm"
          alignSelf={isCollapsed ? "center" : "flex-end"}
        />

        {isCollapsed ? (
          <VStack spacing={4}>
            <Tooltip label="New Chat" placement="right">
              <IconButton 
              icon={
              <CustomButton 
              leftIcon={<NewChatIcon/>}
              borderRadius="8px"
              width="40px"
              height="40px"
              padding="10px"
              // display="flex"
              // justifyContent={"center"}
              />} 
              aria-label="New Chat" size="sm" />
            </Tooltip>
            <Tooltip label="Search" placement="right">
              <IconButton
                icon={<FiSearch />}
                aria-label="Search"
                size="sm"
              />
            </Tooltip>
          </VStack>
        ) : (
          <>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <FiSearch color="gray.400" />
              </InputLeftElement>
              <Input placeholder="Search chats..." size="sm" />
            </InputGroup>

            <Box mt={4}>
              <Text fontWeight="bold" mb={2} fontSize="sm">
                Recent Chats
              </Text>
              <VStack align="start" spacing={2} fontSize="sm">
                <Box cursor="pointer">• Chat with Support</Box>
                <Box cursor="pointer">• Pricing Inquiry</Box>
                <Box cursor="pointer">• Onboarding Guide</Box>
              </VStack>
            </Box>
          </>
        )}
      </VStack>
    </Box>
  );
}
