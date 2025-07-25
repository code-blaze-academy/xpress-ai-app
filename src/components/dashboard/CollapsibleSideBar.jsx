import {
  Box,
  IconButton,
  VStack,
  Tooltip,
  Input,
  InputGroup,
  InputLeftElement,
  useToast,
  useBreakpointValue,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  useDisclosure,
  Skeleton,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import {  useState } from "react";
import SideBarIcon from "../assets/icons/SideBarIcon";
import NewChatIcon from "../assets/icons/NewChatIcon";
import CustomButton from "../CustomButton";
import CloseSideBarIcon from "../assets/icons/CloseSideBarIcon";
import { useQuery } from "@tanstack/react-query";
import { getChatHistory } from "../../store/user/api";
import { useNavigate } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function CollapsibleSidebar() {
  const toast = useToast();
  const navigate = useNavigate();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { isOpen, onOpen, onClose } = useDisclosure(); // for Drawer

  const [isCollapsed, setIsCollapsed] = useState(true);
  const [conversations, setConversations] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  // Chakra theme colors
  const bg = useColorModeValue("gray.50", "#0f121c");
  const bgHoverColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.800", "white");
  const placeholderColor = useColorModeValue("gray.500", "gray.400");

  // Fetch conversations
  const { isLoading } = useQuery(["getChatHistory"], getChatHistory, {
    onSuccess: (response) => setConversations(response.data || []),
    onError: (error) => {
      toast({
        title: "Could not fetch chat history",
        description: error?.response?.data?.error || "Unexpected error",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    },
  });

  const filteredConversations = conversations.filter((conv) =>
    conv.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const SidebarContent = (
    <Box w={isCollapsed ? "60px" : "262px"} transition="width 0.3s" bg={bg} minH="100vh" px={isCollapsed ? 2 : 4} py={4}>
      <VStack align="start" spacing={4}>
        <IconButton
          icon={isCollapsed ? <SideBarIcon width="24px" height="25px" /> : <CloseSideBarIcon />}
          aria-label="Toggle Sidebar"
          onClick={isMobile ? onOpen : () => setIsCollapsed(!isCollapsed)}
          size="sm"
          alignSelf={isCollapsed ? "center" : "flex-end"}
        />

        {!isCollapsed && (
          <>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <FiSearch color={placeholderColor} />
              </InputLeftElement>
              <Input
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
                placeholder="Search"
                size="sm"
                fontSize="14px"
                fontWeight="600"
                color={textColor}
              />
            </InputGroup>

            <Box mt={4} w="full">
              <CustomButton
                leftIcon={<NewChatIcon />}
                title="New Chat"
                borderRadius="8px"
                width="full"
                height="40px"
                mb={4}
                display="flex"
                justifyContent="flex-start"
              />

              <VStack align="start" spacing={3} overflowY="auto" maxH="65vh">
                {isLoading ? (
                  [...Array(20)].map((_, idx) => (
                    <Skeleton key={idx} height="10px" width="100%" borderRadius="md" />
                  ))
                ) : filteredConversations.length > 0 ? (
                  filteredConversations.map((conversation) => (
                    <Box
                      key={conversation.chat_id}
                      fontSize="14px"
                      px={3}
                      py={2}
                      w="full"
                      borderRadius="md"
                      cursor="pointer"
                      _hover={{ bg: bgHoverColor }}
                      onClick={() => navigate(`/chat/${conversation.chat_id}`)}
                    >
                      {conversation.title}
                    </Box>
                  ))
                ) : (
                  <Text fontSize="sm" color="gray.500">
                    No conversations found.
                  </Text>
                )}
              </VStack>
            </Box>
          </>
        )}

        {isCollapsed && (
          <VStack spacing={4}>
            <Tooltip label="New Chat" placement="right">
              <CustomButton leftIcon={<NewChatIcon />} borderRadius="8px" width="40px" height="40px" p={2} />
            </Tooltip>
            <Tooltip label="Search" placement="right">
              <IconButton icon={<FiSearch />} aria-label="Search" size="sm" />
            </Tooltip>
          </VStack>
        )}
      </VStack>
    </Box>
  );

  return isMobile ? (
    <>
      <IconButton
        icon={<HamburgerIcon />}
        aria-label="Open Chat List"
        onClick={onOpen}
        position="fixed"
        top="4"
        left="4"
        zIndex="overlay"
        display={{ base: "block", md: "none" }}
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg={bg}>
          <DrawerHeader borderBottomWidth="1px" color={textColor}>
            Chats
          </DrawerHeader>
          <DrawerBody>{SidebarContent}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  ) : (
    SidebarContent
  );
}
