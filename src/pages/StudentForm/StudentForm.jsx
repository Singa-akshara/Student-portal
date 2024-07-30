import React, { useState } from "react";
import { Box, Button, Input, FormLabel, FormControl, Textarea } from "@chakra-ui/react";

const StudentForm = () => {
  const [name, setName] = useState("");
  const [usn, setUsn] = useState("");
  const [className, setClassName] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [address, setAddress] = useState("");
  const [marks10th, setMarks10th] = useState("");
  const [marks12th, setMarks12th] = useState("");
  const [documents, setDocuments] = useState(null);

  const handleFileChange = (e) => {
    setDocuments(e.target.files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const studentData = {
      name,
      usn,
      className,
      aadhar,
      address,
      marks10th,
      marks12th,
      documents,
    };
    console.log("Student Data:", studentData);
    // Implement data submission logic, e.g., sending to backend
  };

  return (
    <Box maxW="md" mx="auto" mt={5}>
      <form onSubmit={handleSubmit}>
        <FormControl id="name" mb={3}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl id="usn" mb={3}>
          <FormLabel>USN</FormLabel>
          <Input
            type="text"
            value={usn}
            onChange={(e) => setUsn(e.target.value)}
          />
        </FormControl>
        <FormControl id="className" mb={3}>
          <FormLabel>Class</FormLabel>
          <Input
            type="text"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
          />
        </FormControl>
        <FormControl id="aadhar" mb={3}>
          <FormLabel>Aadhar Number</FormLabel>
          <Input
            type="text"
            value={aadhar}
            onChange={(e) => setAadhar(e.target.value)}
          />
        </FormControl>
        <FormControl id="address" mb={3}>
          <FormLabel>Address</FormLabel>
          <Textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </FormControl>
        <FormControl id="marks10th" mb={3}>
          <FormLabel>10th Marks</FormLabel>
          <Input
            type="text"
            value={marks10th}
            onChange={(e) => setMarks10th(e.target.value)}
          />
        </FormControl>
        <FormControl id="marks12th" mb={3}>
          <FormLabel>12th Marks</FormLabel>
          <Input
            type="text"
            value={marks12th}
            onChange={(e) => setMarks12th(e.target.value)}
          />
        </FormControl>
        <FormControl id="documents" mb={3}>
          <FormLabel>Documents</FormLabel>
          <Input
            type="file"
            multiple
            onChange={handleFileChange}
          />
        </FormControl>
        <Button type="submit" colorScheme="teal">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default StudentForm;
