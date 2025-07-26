import { Box } from "@chakra-ui/react"
import { useParams } from "react-router-dom"


const ChatView = () => {
    const { chatId } = useParams()
  return (
    <Box p={4}>
    <h1>ChatView</h1>
    <p>{chatId}</p>
    </Box>
    
  )
}

export default ChatView