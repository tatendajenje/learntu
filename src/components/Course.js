import React from 'react'
import {
    Box,
    Flex,
    VStack,
    HStack,
    Text,
    Heading,
    Image, Button
   
  } from "@chakra-ui/react";
  import {BiUser, BiStar, BiShow} from 'react-icons/bi'

const Course = ({image, name, amount, users, rating, views}) => {
  return (
  <Box   borderRadius={'20px'} bg="#fff">
    <Flex p={4}> 
        <VStack alignItems={'flex-start'}>
            <Image  src={image} boxSize={'300px'} borderRadius={'16px'}  objectFit="cover"/>
            <Heading lineHeight={'40px'} as='h4' size='md'>{name}</Heading>

            <Text fontSize={"24"} fontWeight={"600"} color='green.600'>{amount}</Text>
           
            <HStack spacing={4}>
                <Flex alignItems={'center'}>
                    <BiUser/>
                    <Text>{users} </Text>
                </Flex>
                <Flex alignItems={'center'}>
                    <BiShow/>
                    <Text>{views} </Text>
                </Flex>
                <Flex alignItems={'center'}>
                    <BiStar/>
                    <Text>{rating} </Text>
                </Flex>
            </HStack>
            <Text color={'orange.400'}>A Course by Learntu</Text>
            <Text w="280px">Descption is the key to the uner you of the game in the mean time...</Text>
            <Button color="white" bg={'blue.800'} w="100%" _hover={{bg:'blue.700'}}>Start course</Button>
        </VStack>
    </Flex>
  </Box>
  )
}

export default Course