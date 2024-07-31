import React, { useState } from "react";
import { Box, Button, Input, FormLabel, FormControl, Textarea, FormErrorMessage, useToast } from "@chakra-ui/react";

const StudentForm = () => {
  const [name, setName] = useState("");
  const [usn, setUsn] = useState("");
  const [className, setClassName] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [address, setAddress] = useState("");
  const [marks10th, setMarks10th] = useState("");
  const [marks12th, setMarks12th] = useState("");
  const [documents, setDocuments] = useState(null);
  
  const [errors, setErrors] = useState({});
  const toast = useToast(); // Initialize toast for notifications

  const handleFileChange = (e) => {
    setDocuments(e.target.files);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required.";
    if (!usn) newErrors.usn = "USN is required.";
    if (!className) newErrors.className = "Class is required.";
    if (!aadhar) newErrors.aadhar = "Aadhar Number is required.";
    if (!address) newErrors.address = "Address is required.";
    
    // Validate marks are numbers and within range
    if (!marks10th || isNaN(marks10th) || marks10th < 0 || marks10th > 100) {
      newErrors.marks10th = "Valid 10th Marks between 0 and 100 are required.";
    }
    if (!marks12th || isNaN(marks12th) || marks12th < 0 || marks12th > 100) {
      newErrors.marks12th = "Valid 12th Marks between 0 and 100 are required.";
    }
    
    if (!documents || documents.length === 0) newErrors.documents = "Documents are required.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return; // Validate form before submission

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
    
    // Show success notification
    toast({
      title: "Success!",
      description: "Student details stored successfully!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    
    console.log("Student Data:", studentData);
    // Implement data submission logic here (e.g., send to backend)

    // Clear form fields after submission
    setName("");
    setUsn("");
    setClassName("");
    setAadhar("");
    setAddress("");
    setMarks10th("");
    setMarks12th("");
    setDocuments(null);
    setErrors({}); // Clear errors
  };

  // Function to handle numeric input (allow spaces for Aadhar)
  const handleNumericInput = (setter, allowSpaces = false) => (e) => {
    const value = e.target.value;
    const regex = allowSpaces ? /^[0-9 ]*$/ : /^\d*$/; // Regex allows spaces if allowSpaces is true
    if (regex.test(value)) {
      setter(value);
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={5}>
      <form onSubmit={handleSubmit}>
        <FormControl id="name" mb={3} isInvalid={errors.name}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <FormErrorMessage>{errors.name}</FormErrorMessage>
        </FormControl>
        <FormControl id="usn" mb={3} isInvalid={errors.usn}>
          <FormLabel>USN</FormLabel>
          <Input
            type="text"
            value={usn}
            onChange={(e) => setUsn(e.target.value)}
            required
          />
          <FormErrorMessage>{errors.usn}</FormErrorMessage>
        </FormControl>
        <FormControl id="className" mb={3} isInvalid={errors.className}>
          <FormLabel>Class</FormLabel>
          <Input
            type="text"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            required
          />
          <FormErrorMessage>{errors.className}</FormErrorMessage>
        </FormControl>
        <FormControl id="aadhar" mb={3} isInvalid={errors.aadhar}>
          <FormLabel>Aadhar Number</FormLabel>
          <Input
            type="text"
            value={aadhar}
            onChange={handleNumericInput(setAadhar, true)} // Allow spaces
            required
          />
          <FormErrorMessage>{errors.aadhar}</FormErrorMessage>
        </FormControl>
        <FormControl id="address" mb={3} isInvalid={errors.address}>
          <FormLabel>Address</FormLabel>
          <Textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <FormErrorMessage>{errors.address}</FormErrorMessage>
        </FormControl>
        <FormControl id="marks10th" mb={3} isInvalid={errors.marks10th}>
          <FormLabel>10th Marks</FormLabel>
          <Input
            type="text"
            value={marks10th}
            onChange={handleNumericInput(setMarks10th)} // Restrict input to numeric
            required
          />
          <FormErrorMessage>{errors.marks10th}</FormErrorMessage>
        </FormControl>
        <FormControl id="marks12th" mb={3} isInvalid={errors.marks12th}>
          <FormLabel>12th Marks</FormLabel>
          <Input
            type="text"
            value={marks12th}
            onChange={handleNumericInput(setMarks12th)} // Restrict input to numeric
            required
          />
          <FormErrorMessage>{errors.marks12th}</FormErrorMessage>
        </FormControl>
        <FormControl id="documents" mb={3} isInvalid={errors.documents}>
          <FormLabel>Documents</FormLabel>
          <Input
            type="file"
            multiple
            onChange={handleFileChange}
            required
          />
          <FormErrorMessage>{errors.documents}</FormErrorMessage>
        </FormControl>
        <Button type="submit" colorScheme="teal">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default StudentForm;
