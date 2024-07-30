import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const Project = () => {
    const { id } = useParams(); // Get project ID from URL params

    // Example project data (this could come from an API in a real app)
    const project = {
        id: id, // Use the ID from URL
        name: "Project Alpha",
        description: "This project is about developing a student portal.",
        status: "In Progress",
    };

    const handleDelete = () => {
        // Implement delete logic here
        console.log("Project Deleted:", project.id);
    };

    return (
        <Box maxW="md" mx="auto" mt={5} p={4}>
            <Heading as="h2" size="lg" mb={4}>
                {project.name}
            </Heading>
            <Text fontSize="md" mb={2}>
                <strong>Status:</strong> {project.status}
            </Text>
            <Text mb={4}>
                <strong>Description:</strong> {project.description}
            </Text>
            <Button colorScheme="red" onClick={handleDelete}>
                Delete Project
            </Button>
        </Box>
    );
};

export default Project;
