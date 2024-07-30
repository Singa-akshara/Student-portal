import React, { useState } from "react";
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Heading,
} from "@chakra-ui/react";

const NewProject = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("Not Started"); // Default status

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can implement logic to save the new project details
        console.log("New Project Details:", {
            name,
            description,
            status,
        });

        // Clear form fields after submission (optional)
        setName("");
        setDescription("");
        setStatus("Not Started");
    };

    return (
        <Box maxW="md" mx="auto" mt={5} p={4}>
            <Heading as="h2" size="lg" mb={4}>
                New Project
            </Heading>
            <form onSubmit={handleSubmit}>
                <FormControl id="name" mb={3} isRequired>
                    <FormLabel>Project Name</FormLabel>
                    <Input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </FormControl>
                <FormControl id="description" mb={3} isRequired>
                    <FormLabel>Description</FormLabel>
                    <Textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </FormControl>
                <FormControl id="status" mb={3} isRequired>
                    <FormLabel>Status</FormLabel>
                    <Input
                        type="text"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    />
                </FormControl>
                <Button type="submit" colorScheme="teal">
                    Create Project
                </Button>
            </form>
        </Box>
    );
};

export default NewProject;
