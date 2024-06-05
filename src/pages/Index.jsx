import { Box, Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";

const Index = () => {
  return (
    <Box>
      <Header />
      <Flex>
        <Sidebar />
        <MainContent />
      </Flex>
    </Box>
  );
};

export default Index;