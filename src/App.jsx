import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
// import { AuthContextProvider } from "./pages/auth/AuthContext"
import Routes from "./routes/index"
import theme from "./theme"

const App = () => {

  // const queryClient = new QueryClient({
  //   defaultOptions:{
  //     queries:{
  //       staleTime:Infinity,
  //       cacheTime:Infinity
  //     }
  //   }
  // })
  const queryClient = new QueryClient();

  return (
     <QueryClientProvider client={queryClient}>
       <ChakraProvider theme={theme}>
         <ColorModeScript initialColorMode={theme.config.initialColorMode} />
           {/* <AuthContextProvider> */}
             <Routes/>
            {/* </AuthContextProvider> */}
        </ChakraProvider>
     </QueryClientProvider>
  )
}

export default App