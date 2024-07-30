import React from "react";
import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={RouterLink} to="/" color="white" fontWeight="bold">
            Student Portal
          </Link>
        </Box>
        <Flex alignItems="center">
          <Link as={RouterLink} to="/student/new" color="white" mr={4}>
            Add Student
          </Link>
          <Link as={RouterLink} to="/student/details" color="white" mr={4}>
            View Student
          </Link>
          <Link as={RouterLink} to="/login" color="white" mr={4}>
            Login
          </Link>
          <Link as={RouterLink} to="/signup" color="white">
            Sign Up
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
