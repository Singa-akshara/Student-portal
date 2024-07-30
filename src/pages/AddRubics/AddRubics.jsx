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

const AddRubics = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [criteria, setCriteria] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can implement logic to save the rubric details.
        console.log("Rubric Details:", {
            title,
            description,
            criteria,
        });

        // Clear form fields after submission (optional)
        setTitle("");
        setDescription("");
        setCriteria("");
    };

    return (
        <Box maxW="md" mx="auto" mt={5} p={4}>
            <Heading as="h2" size="lg" mb={4}>
                Add Rubric
            </Heading>
            <form onSubmit={handleSubmit}>
                <FormControl id="title" mb={3} isRequired>
                    <FormLabel>Rubric Title</FormLabel>
                    <Input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </FormControl>
                <FormControl id="description" mb={3} isRequired>
                    <FormLabel>Description</FormLabel>
                    <Textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </FormControl>
                <FormControl id="criteria" mb={3} isRequired>
                    <FormLabel>Criteria</FormLabel>
                    <Textarea
                        value={criteria}
                        onChange={(e) => setCriteria(e.target.value)}
                    />
                </FormControl>
                <Button type="submit" colorScheme="teal">
                    Add Rubric
                </Button>
            </form>
        </Box>
    );
};

export default AddRubics;
