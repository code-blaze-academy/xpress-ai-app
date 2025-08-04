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
  Box
} from "@chakra-ui/react";
import { FiShare2 } from "react-icons/fi";
import useUserStore from "../../hooks/storage/userStore";
import { useNavigate } from "react-router-dom";

export const  HeaderBar = () => {
  const navigate = useNavigate();
  const { user: userData ,logout} = useUserStore((state) => state);
  const { user } = userData;
  const inputBg = useColorModeValue("white", "gray.800");

  const handleLogout = () => {
    logout();
    navigate("/login")
  }
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
        <IconButton icon={<FiShare2 />} aria-label="Share" variant="ghost" />
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
