import { Box, Flex, Text } from "@chakra-ui/react";

export const ChatBubble = ({ sender, content, inputBg, textColor }) => {
  const isUser = sender === "user";

  return (
    <Flex justify={isUser ? "flex-end" : "flex-start"}>
      <Box
        bg={isUser ? "#0f121c" : inputBg}
        color={isUser ? "white" : textColor}
        px={4}
        py={2}
        borderRadius="lg"
        maxW="70%"
        boxShadow="sm"
      >
        <Text whiteSpace="pre-wrap">{content}</Text>
      </Box>
    </Flex>
  );
};


