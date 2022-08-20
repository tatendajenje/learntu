import { Box, Flex, VStack, Heading, Grid, HStack,  Button } from "@chakra-ui/react";
import React from "react";
import Breadcrumbs from "../../components/Breadcrumb";
import HeaderFooterWrapper from "../../hoc/HeaderFooterWrapper";
import Sidebar from "../../components/courses/Sidebar";
import Course from './../../components/Course'
import { courses } from "./../../assets/data/courseData";


const Courses = () => {
  return (
    <HeaderFooterWrapper>
      <Breadcrumbs title={'Courses'}/>
    <Box pt={20} pb={20}>
      <Flex alignItems={"flex-start"} justifyContent={"center"} >
        <HStack  w="78.8%"
          alignItems={"flex-start"}
          justifyContent={"space-between"}>
          <Sidebar/>
          <Box >
    <Flex alignItems={"center"} justifyContent={"center"}>
      <VStack
        w="100%"
        alignItems={"flex-start"}
        justifyContent={"space-between"}
      >
       <HStack alignItems={'center'} justifyContent={"center"} pb={8}>
       <Heading >Popular Courses</Heading> 
       <Button variant={"ghost"} color={"red.500"}>See more</Button>
       </HStack>
        <Grid templateColumns="repeat(3, 1fr)" gap={16}>
          {courses.map((item, index) => {
            return (
              <Course
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
        </HStack>
      </Flex>
    </Box>
    </HeaderFooterWrapper>
  );
};

export default Courses;
