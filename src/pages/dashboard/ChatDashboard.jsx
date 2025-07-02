import {
  Box,
  Flex,
  Text,
  IconButton,
  Avatar,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Input,
  InputGroup,
  InputLeftElement,
  useDisclosure,
  VStack,
  HStack,
  useColorModeValue,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Spinner,
  Center,
} from "@chakra-ui/react";
import { FiMenu, FiShare2, FiSearch, FiSend, FiPaperclip } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../components/CustomButton";
import VideoIcon from "../../components/assets/icons/VideoIcon";
import { FaVideo } from "react-icons/fa";

export default function ChatDashboard() {
  const { isOpen, onOpen, onClose } = useDisclosure(); // sidebar
  const {
    isOpen: isProfileOpen,
    onOpen: openProfile,
    onClose: closeProfile,
  } = useDisclosure(); // profile modal

  const [user] = useState("Dear");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef();

  const bg = useColorModeValue("gray.50", "gray.900");
  const inputBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const linkTextColor = useColorModeValue("#0E47D8")

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: Date.now(),
      sender: "user",
      content: message,
    };

    setMessages((prev) => [...prev, newMessage]);
    setMessage("");

    // Simulate typing effect
    setIsTyping(true);
    setTimeout(() => {
      const reply = {
        id: Date.now() + 1,
        sender: "bot",
        content: "This is a simulated response. How can I help you further?",
      };
      setMessages((prev) => [...prev, reply]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <Flex  direction="column" bg={bg}>
      {/* Top Navbar */}
      <Flex
        justify="space-between"
        align="center"
        px={4}
        py={3}
        bg={inputBg}
        borderBottom="1px solid"
        borderColor={borderColor}
      >
        <IconButton
          aria-label="Open sidebar"
          icon={<FiMenu />}
          onClick={onOpen}
          variant="ghost"
        />
        <Flex align="center" gap={2}>
          <IconButton icon={<FiShare2 />} aria-label="Share" variant="ghost" />
          <Avatar
            name={user}
            size="sm"
            cursor="pointer"
            onClick={openProfile}
          />
        </Flex>
      </Flex>

      {/* Chat Interface */}
      {messages.length === 0 ? (
        <Center flex="1" flexDirection="column" textAlign="center" px={4}>
          <Text fontSize="3xl" fontWeight="bold" color={textColor}>
            Hi {user},
          </Text>
          <Text fontSize={{base:"14px",lg:"18px"}} mb={"62px"} mt={3} color={textColor}>
            Want to continue from our previous <br /> conversation or <Link className="text-[#0E47D8]">start a new chat here?</Link>
          </Text>
        </Center>
      ) : (
        <Box flex="1" px={[4, 6]} py={4} overflowY="auto">
          <VStack align="stretch" spacing={4}>
            {messages.map((msg) => (
              <Flex
                key={msg.id}
                justify={msg.sender === "user" ? "flex-end" : "flex-start"}
              >
                <Box
                  bg={msg.sender === "user" ? "blue.500" : inputBg}
                  color={msg.sender === "user" ? "white" : textColor}
                  px={4}
                  py={2}
                  borderRadius="lg"
                  maxW="70%"
                  boxShadow="sm"
                >
                  {msg.content}
                </Box>
              </Flex>
            ))}
            {isTyping && (
              <Box
                bg={inputBg}
                px={4}
                py={2}
                borderRadius="lg"
                boxShadow="sm"
                color={textColor}
                maxW="fit-content"
              >
                <HStack>
                  <Spinner size="sm" />
                  <Text fontSize="sm">Typing...</Text>
                </HStack>
              </Box>
            )}
            <div ref={messagesEndRef} />
          </VStack>
        </Box>
      )}

      {/* Message Input Only if Chat Started */}
<Box
  p="10px"
  background="#0f121c"
  h="60px"
  w="796px"
  m="auto"
  borderRadius="full"
>
  <HStack
    spacing={3}
    bg="#0f121c"
    px={4}
    borderRadius="full"
    border="1px solid"
    borderColor={useColorModeValue("gray.200", "gray.700")}
    h="full"
    align="center"
    justify="space-between"
  >
    {/* Left: Video Icon */}
    <IconButton
      icon={<FaVideo />}
      aria-label="Video"
      variant="ghost"
      size="sm"
      color="gray.400"
      _hover={{ bg: "transparent", color: "blue.400" }}
    />

    {/* Middle: Input field (flex-grow fills available space) */}
    <Input
      placeholder="Type your message..."
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      variant="unstyled"
      color="white"
      mx={2}
      flex="1"
      onKeyDown={(e) => {
        if (e.key === "Enter") handleSend();
      }}
    />

    {/* Right: Attach Icon + Send Button */}
    <HStack spacing={1}>
      <IconButton
        icon={<FiPaperclip />}
        aria-label="Attach"
        variant="ghost"
        size="sm"
        color="gray.400"
        _hover={{ bg: "transparent", color: "blue.400" }}
      />

      <CustomButton
        title="Send"
        borderRadius="full"
        onClick={handleSend}
        background="#142557"
        isBgGradient={false}
      />
    </HStack>
  </HStack>
</Box>


      {/* Sidebar Drawer */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg={bg}>
          <DrawerHeader borderBottom="1px solid" borderColor={borderColor}>
            Previous Conversations
          </DrawerHeader>
          <DrawerBody>
            <InputGroup mb={4}>
              <InputLeftElement pointerEvents="none" children={<FiSearch />} />
              <Input
                placeholder="Search conversations..."
                bg={inputBg}
                color={textColor}
                borderColor={borderColor}
              />
            </InputGroup>
            <VStack align="start" spacing={3} color={textColor}>
              <Box cursor="pointer">• Chat with Support</Box>
              <Box cursor="pointer">• Pricing Inquiry</Box>
              <Box cursor="pointer">• Onboarding Guide</Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Profile Modal */}
      <Modal isOpen={isProfileOpen} onClose={closeProfile} isCentered>
        <ModalOverlay />
        <ModalContent bg={inputBg}>
          <ModalHeader color={textColor}>My Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="bold" mb={2} color={textColor}>Name:</Text>
            <Text mb={4} color={textColor}>{user}</Text>
            <Text fontWeight="bold" mb={2} color={textColor}>Email:</Text>
            <Text mb={4} color={textColor}>user@example.com</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={closeProfile}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
