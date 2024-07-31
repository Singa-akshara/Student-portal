import React, { useState } from "react";
import { Box, Button, Input, FormLabel, FormControl, FormErrorMessage } from "@chakra-ui/react";
import { toast } from 'react-toastify'; // Import toast for notifications

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Validate form before submission

    // Simulate password reset logic
    console.log("Reset Password for:", email);

    // Show password reset notification
    toast.info("Your password has been reset successfully!");

    // Clear form fields after submission
    setEmail("");
    setErrors({});
  };

  return (
    <Box maxW="md" mx="auto" mt={5}>
      <form onSubmit={handleSubmit}>
        <FormControl id="email" mb={3} isInvalid={errors.email}>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <FormErrorMessage>{errors.email}</FormErrorMessage>
        </FormControl>
        <Button type="submit" colorScheme="teal">
          Reset Password
        </Button>
      </form>
    </Box>
  );
};

export default ForgotPassword;
