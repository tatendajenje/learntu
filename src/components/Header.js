import React from "react";
import { Link } from 'react-router-dom'
import {
  Box,
  Text,
  Flex,
  HStack,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Divider,
  
} from "@chakra-ui/react";
import { BiSearch, BiMenu } from "react-icons/bi";


const Header = () => {
  return (
    <Box>
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        pt={4}
        pb={4}
      
        borderColor={"border.100"}
      >
        <HStack
          w="78.8%"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Text fontSize={"32px"} fontWeight={"600"}>
            Learntu
          </Text>
          <Stack>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<BiSearch color="gray.300" />}
              />
              <Input type="text" placeholder="Search any course" />
            </InputGroup>
          </Stack>
          <Stack direction="row" spacing={4} align="center">
           <Link to='/login'>
           <Button borderRadius={"4px"} size={"sm"} variant="ghost"  _hover={{ bg: '', color :'secondary.100'}}>
              Login
            </Button></Link>
            <Link to='/register'><Button
              color={"white"}
              size={"sm"}
              bg={"secondary.100"}
              variant="solid"
              borderRadius={"4px"}
              _hover={{ bg: 'yellow.400', color: 'black' }}
            >
              Registration
            </Button></Link>
          </Stack>
        </HStack>
      </Flex>
      <Divider/>

      <Flex alignItems={"center"} justifyContent={"center"} pt={4} pb={4}>
        <HStack w="78.8%" alignItems={"center"} justifyContent={"flex-start"} spacing={8} >
          <Text>
            <Flex alignItems={"center"} borderRight={"1px"} w='124px'>
              <BiMenu />
              <Link to=''>Categories</Link>
            </Flex>
          </Text>
          <Text>
            <Link to='/'>Home</Link>
          </Text>
          <Text>
            <Link to='/courses'>Courses</Link>
          </Text>
          <Text>
            <Link to='/about-us'>About Us</Link>
          </Text>
          <Text>
            <Link to='/contact'>Contact</Link>
          </Text>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
