import React, { useState } from "react";
import { Box, Button, Input, FormLabel, FormControl, Text } from "@chakra-ui/react";

const StudentDetails = () => {
  const [search, setSearch] = useState("");
  const [student, setStudent] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic, e.g., fetching from backend
    // For demonstration, we'll use a mock student data
    const mockStudent = {
      name: "John Doe",
      usn: "1234",
      className: "10th Grade",
      aadhar: "5678",
      address: "123 Main St",
      marks10th: "85%",
      marks12th: "90%",
      documents: ["doc1.pdf", "doc2.pdf"],
    };
    setStudent(mockStudent);
  };

  return (
    <Box maxW="md" mx="auto" mt={5}>
      <form onSubmit={handleSearch}>
        <FormControl id="search" mb={3}>
          <FormLabel>Search by USN or Name</FormLabel>
          <Input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </FormControl>
        <Button type="submit" colorScheme="teal">
          Search
        </Button>
      </form>
      {student && (
        <Box mt={5}>
          <Text><strong>Name:</strong> {student.name}</Text>
          <Text><strong>USN:</strong> {student.usn}</Text>
          <Text><strong>Class:</strong> {student.className}</Text>
          <Text><strong>Aadhar:</strong> {student.aadhar}</Text>
          <Text><strong>Address:</strong> {student.address}</Text>
          <Text><strong>10th Marks:</strong> {student.marks10th}</Text>
          <Text><strong>12th Marks:</strong> {student.marks12th}</Text>
          <Text><strong>Documents:</strong></Text>
          <ul>
            {student.documents.map((doc, index) => (
              <li key={index}>{doc}</li>
            ))}
          </ul>
        </Box>
      )}
    </Box>
  );
};

export default StudentDetails;
