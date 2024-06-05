import { Box, Flex, Heading, IconButton, Spacer } from "@chakra-ui/react";
import AddReportIcon from "../assets/icons/AddReportIcon";
import QuestionIcon from "../assets/icons/QuestionIcon";
import BellIcon from "../assets/icons/BellIcon";
import UserIcon from "../assets/icons/UserIcon";

const Header = () => {
  return (
    <Box bg="gray.100" p={4} boxShadow="sm">
      <Flex align="center">
        <Heading size="md">Data Table</Heading>
        <Spacer />
        <IconButton aria-label="Add report" icon={<AddReportIcon />} mr={2} />
        <IconButton aria-label="Help" icon={<QuestionIcon />} mr={2} />
        <IconButton aria-label="Notifications" icon={<BellIcon />} mr={2} />
        <IconButton aria-label="User profile" icon={<UserIcon />} />
      </Flex>
    </Box>
  );
};

export default Header;