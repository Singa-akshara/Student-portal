import React, { useState } from "react";
import { Box, Button, Input, FormLabel, FormControl } from "@chakra-ui/react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement password reset logic
    console.log("Reset Password for:", email);
  };

  return (
    <Box maxW="md" mx="auto" mt={5}>
      <form onSubmit={handleSubmit}>
        <FormControl id="email" mb={3}>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <Button type="submit" colorScheme="teal">
          Reset Password
        </Button>
      </form>
    </Box>
  );
};

export default ForgotPassword;
