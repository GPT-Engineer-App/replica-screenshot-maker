import { Box, Text, VStack } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box bg="gray.50" p={4} height="100vh" boxShadow="sm">
      <VStack align="start" spacing={4}>
        <Box>
          <Text fontSize="lg" fontWeight="bold">Project Name</Text>
          <Text fontSize="sm" color="gray.500">Category</Text>
        </Box>
        <Text>Call Tool</Text>
        <Text>Invoice Tool</Text>
      </VStack>
    </Box>
  );
};

export default Sidebar;