import React, { useState } from "react";
import { Box, Button, Input, FormLabel, FormControl, FormErrorMessage } from "@chakra-ui/react";
import { toast } from 'react-toastify'; // Import toast for notifications
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required.";
    if (!password) newErrors.password = "Password is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Validate form before submission

    // Simulate login logic
    console.log("Login Data:", { email, password });

    // Show login success notification
    toast.success("Login successful!");

    // Clear form fields after submission
    setEmail("");
    setPassword("");
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
        <FormControl id="password" mb={3} isInvalid={errors.password}>
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <FormErrorMessage>{errors.password}</FormErrorMessage>
        </FormControl>
        <Button type="submit" colorScheme="teal" mb={3}>
          Login
        </Button>
      </form>
      <Link to="/login/password-reset">Forgot Password?</Link> {/* Add link to Forgot Password page */}
    </Box>
  );
};

export default Login;
