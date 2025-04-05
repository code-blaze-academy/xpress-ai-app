'use client'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Divider,
  Checkbox,
} from '@chakra-ui/react'
import { useState } from 'react'
import { Link as RouterLink } from "react-router-dom"
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import XpressAiLogo from '../../assets/icons/XpressAiLogo'
import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'

export const Login = ()  => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', '#0f121c')}>
      <Stack 
      // border={"1px solid red"} 
      spacing={8} 
      mx={'auto'} 
      w={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading display={"flex"} alignItems={"center"} fontSize={'4xl'} textAlign={'center'}>
            <XpressAiLogo/>
            press AI
          </Heading>
          {/* <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text> */}
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', '#0f121c')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
          <Stack spacing={4} pt={2}>
            <Button
               leftIcon={<FcGoogle/>}
               borderRadius="8px"
                border="1px solid rgba(158, 158, 158, 0.20)"
              //  border="1px solid rgba(158, 158, 158, 0.20)"
              _hover={{
              // bgGradient: "linear(to-r, #173685 0%, rgba(23, 54, 133, 0.70) 50%, #718517 100%)",
              }}
              >
             Continue with Google
           </Button>

           <Button
               leftIcon={<FaApple/>}
               borderRadius="8px"
                border="1px solid rgba(158, 158, 158, 0.20)"
              //  border="1px solid rgba(158, 158, 158, 0.20)"
              _hover={{
              // bgGradient: "linear(to-r, #173685 0%, rgba(23, 54, 133, 0.70) 50%, #718517 100%)",
              }}
              >
             Continue with Apple
           </Button>
            </Stack>

            <Divider my={"32px"}/>

            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Text color={'blue.500'} as={RouterLink} to="/forgot-password">Forgot password?</Text>
            </Stack>
            <Button
             borderRadius="8px"
             //  border="1px solid rgba(158, 158, 158, 0.20)"
              bgGradient="linear(to-r, #173685 0%, rgba(23, 54, 133, 0.50) 50%, #718517 100%)"
              color="white"
             _hover={{
             bgGradient: "linear(to-r, #173685 0%, rgba(23, 54, 133, 0.70) 50%, #718517 100%)",
             }}
            >
              Log in
            </Button>
             </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Do not have an account ? <Text color={'blue.400'} as={RouterLink} to="/register">Signup</Text>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}