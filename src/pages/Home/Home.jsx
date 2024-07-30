import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom"; // To add navigation links

const Home = () => {
    return (
        <Box textAlign="center" py={10} px={6}>
            <Heading as="h1" size="2xl" mb={4}>
                Welcome to the Student Portal!
            </Heading>
            <Text fontSize="lg" mb={8}>
                This is your one-stop solution for managing student information.
            </Text>
            <Link to="/login">
                <Button colorScheme="teal" size="lg">
                    Go to Login
                </Button>
            </Link>
        </Box>
    );
};

export default Home;
