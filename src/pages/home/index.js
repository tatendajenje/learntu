import React from "react";
import {
  Box,
  Flex,
  HStack,
  Heading,
  Highlight,
  Image,
  Text,
  Button,
  Stack,
  Grid,
  VStack,
} from "@chakra-ui/react";
import HeaderFooterWrapper from "../../hoc/HeaderFooterWrapper";
import img from "./../../assets/images/hero.jpg";
import Course from "../../components/Course";
import { courses } from "../../assets/data/courseData";





const offer = [
  "Online Course",
  "Certification",
  "Peer Reviewed Articles &  Papers",
  "Opinion Pieces From Subject Matter Experts",
];
const Home = () => {

  return (
    <>

      <HeaderFooterWrapper>
        <Box pt={20}>
          <Flex alignItems={"center"} justifyContent={"center"}>
            <HStack
              w="78.8%"
              alignItems={"flex-start"}
              justifyContent={"space-between"}
            >
              <Flex flexDirection={"column"}>
                <Heading fontSize={"64px"} w={"528px"}>
                  <Highlight
                    query={["education", "learning."]}
                    styles={{ px: "3", py: "3", bg: "secondary.100" }}
                  >
                    Wisdom…. comes not from age, but from education and
                    learning.
                  </Highlight>
                </Heading>
                <Text pt={8}>
                  Tell me and I forget. Teach me and I remember. Involve me and
                  I learn.
                </Text>
                <Stack pt={4}>
                  <Button
                    color={"white"}
                    size={"sm"}
                    bg={"secondary.100"}
                    variant="solid"
                    borderRadius={"4px"}
                    w={"120px"}
                  >
                    Discover now
                  </Button>
                </Stack>
              </Flex>

              <Image
                boxSize="640px"
                objectFit="cover"
                src={img}
                borderRadius={"20px"}
              />
            </HStack>
          </Flex>
        </Box>
        <Box mt={20} pt={20} pb={20} bg={"blue.900"}>
          <Flex alignItems={"center"} justifyContent={"center"}>
            <HStack
              w="78.8%"
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              {offer.map((item, index) => {
                return <Text color={"white"}>{item}</Text>;
              })}
            </HStack>
          </Flex>
        </Box>
        <Box pt={20}>
          <Flex alignItems={"center"} justifyContent={"center"}>
            <VStack
              w="78.8%"
              alignItems={"flex-start"}
              justifyContent={"space-between"}
            >
              <Heading>Popular Courses</Heading>
              <Grid templateColumns="repeat(4, 1fr)" gap={16}>
                {courses.map((item, index) => {
                  return (
                    <Course
                      key={index}
                      image={item.image}
                      name={item.name}
                      amount={item.amount}
                      users={item.users}
                      rating={item.rating}
                      views={item.views}
                    />
                  );
                })}
              </Grid>
            </VStack>
          </Flex>
        </Box>
        <Box bg={"secondary.100"} mt={20} pt={20} pb={20}>
          <Flex alignItems={"center"} justifyContent={"center"}>
            <VStack w="78.8%" alignItems={"center"} justifyContent={"center"}>
              <Heading color={"white"} pb={4}>
                Leadership and learning are indispensable to each other.
              </Heading>
              <Button
                size={"sm"}
                color="primary.100"
                bg={"white"}
                variant={"solid"}
              >
                Get Started
              </Button>
            </VStack>
          </Flex>
        </Box>
      </HeaderFooterWrapper>
    </>
  );
};

export default Home;
