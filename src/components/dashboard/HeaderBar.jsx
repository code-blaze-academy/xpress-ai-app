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
      justify="space-between"
      align="center"
      px={4}
      py={3}
      bg={inputBg}
      borderBottom="1px solid"
      borderColor="gray.700"
    >
      <Box /> {/* Placeholder if you want to add logo later */}
      <Flex align="center" gap={2}>
        <IconButton icon={<FiShare2 />} aria-label="Share" variant="ghost" />
        <Menu>
          <MenuButton as={Button} rounded="full" variant="link" minW={0}>
            <Avatar size="sm" src={user?.profile_image} />
          </MenuButton>
          <MenuList bg="#0f121c" border="none" color="white">
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}
