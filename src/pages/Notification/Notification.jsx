import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Notification = () => {
    // Example notifications (this can be fetched from an API)
    const notifications = [
        { id: 1, message: "Welcome to the Student Portal!" },
        { id: 2, message: "Your profile has been successfully updated." },
        { id: 3, message: "New assignments have been posted." },
        { id: 4, message: "Don't forget to check your grades!" },
    ];

    return (
        <Box maxW="md" mx="auto" mt={5} p={4}>
            <Heading as="h2" size="lg" mb={4}>
                Notifications
            </Heading>
            <VStack spacing={4} align="stretch">
                {notifications.map((notification) => (
                    <Box
                        key={notification.id}
                        borderWidth="1px"
                        borderRadius="md"
                        p={3}
                        bg="gray.100"
                    >
                        <Text>{notification.message}</Text>
                    </Box>
                ))}
            </VStack>
        </Box>
    );
};

export default Notification;
