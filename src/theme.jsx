import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "light" ? "gray.50" : "gray.800",
        color: props.colorMode === "light" ? "gray.800" : "gray.50",
      },
    }),
  },
  colors: {
    brand: {
      100: '#f7c8c8',
      900: '#1a202c',
    },
  },
});

export default theme;
