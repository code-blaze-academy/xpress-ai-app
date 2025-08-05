import {
  Flex,
  IconButton,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  Button,
  Box,
  useDisclosure,
  Text,
  useClipboard,
  useToast
} from "@chakra-ui/react";
import { FiShare2 } from "react-icons/fi";
import useUserStore from "../../hooks/storage/userStore";
import { useNavigate } from "react-router-dom";
import CustomButton from "../CustomButton";
import { CustomModal } from "./CustomModal";

export const  HeaderBar = () => {
  const navigate = useNavigate();
  const { user: userData ,logout} = useUserStore((state) => state);
  const { user } = userData;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { onCopy } = useClipboard(window.location.href);
  const toast = useToast();

  const handleLogout = () => {
    logout();
    navigate("/login")
  }

  const handleCopy = () => {
   onCopy();
    // setCopied(true);
    toast({
      title: "Link Copied to clipboard",
      status: "success",
      duration: 1500,
      isClosable: true,
    });
    // setTimeout(() => setCopied(false), 2000);
  };
  return (
    <Flex
      justifyContent={{base:"flex-start", md:"flex-end"}}
      align="center"
      px={4}
      py={3}
      borderBottom="1px solid"
      borderColor="gray.700"
      flexBasis={"100%"}
    >
      <Box /> {/* Placeholder if you want to add logo later */}
      <Flex align="center" gap={2}>
        <IconButton 
        onClick={onOpen}
        icon={<FiShare2 />} 
        aria-label="Share" variant="ghost"
         />
         <CustomModal 
         isOpen={isOpen}
         onClose={onClose}
         title="Share link"
         >
         <Box
         display={"flex"}
         flexDirection={"column"}
         gap="16px"
         justifyContent={"center"}
         alignItems={"center"}
         >
          <Text>https://expressai.app/how_can_i_go_about_/share..</Text>
          <CustomButton
          title="Copy Link"
          onClick={handleCopy}
          />
         </Box>
         </CustomModal>
        <Menu>
          <MenuButton as={Button} rounded="full" variant="link" minW={0}>
            <Avatar size="sm" src={user?.profile_image} />
          </MenuButton>
          <MenuList bg="#0f121c" border="none" color="white">
            <MenuItem>Theme</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Upgrade</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
            <MenuItem>Help</MenuItem> 
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}
