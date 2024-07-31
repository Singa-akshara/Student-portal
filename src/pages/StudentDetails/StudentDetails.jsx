import React, { useState } from "react";
import { Box, Button, Input, FormLabel, FormControl, Text, Select, VStack } from "@chakra-ui/react";

const mockStudents = [
  { name: "John Doe", usn: "1234", className: "10th Grade", aadhar: "5678", address: "123 Main St", marks10th: "85%", marks12th: "90%", documents: ["doc1.pdf", "doc2.pdf"] },
  { name: "Jane Smith", usn: "5678", className: "10th Grade", aadhar: "9101", address: "456 Elm St", marks10th: "90%", marks12th: "92%", documents: ["doc3.pdf", "doc4.pdf"] },
  { name: "Alice Brown", usn: "9101", className: "11th Grade", aadhar: "1121", address: "789 Oak St", marks10th: "80%", marks12th: "85%", documents: ["doc5.pdf", "doc6.pdf"] },
];

const StudentDetails = () => {
  const [searchType, setSearchType] = useState("usn");
  const [searchValue, setSearchValue] = useState("");
  const [student, setStudent] = useState(null);
  const [studentsInClass, setStudentsInClass] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    
    if (searchType === "usn") {
      // Search by USN
      const foundStudent = mockStudents.find((student) => student.usn === searchValue);
      setStudent(foundStudent || null);
      setStudentsInClass([]);
    } else if (searchType === "class") {
      // Search by Class
      const studentsInClass = mockStudents.filter((student) => student.className === searchValue);
      setStudent(null);
      setStudentsInClass(studentsInClass);
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={5}>
      <form onSubmit={handleSearch}>
        <FormControl id="searchType" mb={3}>
          <FormLabel>Select Search Type</FormLabel>
          <Select
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
          >
            <option value="usn">Search by USN</option>
            <option value="class">Search by Class</option>
          </Select>
        </FormControl>
        <FormControl id="searchValue" mb={3}>
          <FormLabel>{searchType === "usn" ? "Enter USN" : "Enter Class Name"}</FormLabel>
          <Input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
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

      {studentsInClass.length > 0 && (
        <Box mt={5}>
          <Text fontWeight="bold">Students in {searchValue}:</Text>
          <VStack spacing={2} align="start">
            {studentsInClass.map((stu, index) => (
              <Box key={index} borderWidth="1px" borderRadius="md" p={3} bg="gray.100">
                <Text><strong>Name:</strong> {stu.name}</Text>
                <Text><strong>USN:</strong> {stu.usn}</Text>
              </Box>
            ))}
          </VStack>
        </Box>
      )}
    </Box>
  );
};

export default StudentDetails;
