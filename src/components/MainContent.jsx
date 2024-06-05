import { Box, Button, Flex, IconButton, Input, Select, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import SearchIcon from "../assets/icons/SearchIcon";
import ImportIcon from "../assets/icons/ImportIcon";
import ExportIcon from "../assets/icons/ExportIcon";
import EditIcon from "../assets/icons/EditIcon";
import DeleteIcon from "../assets/icons/DeleteIcon";

const MainContent = () => {
  return (
    <Box p={4} flex="1">
      <Flex mb={4} align="center">
        <Input placeholder="Search" mr={2} />
        <IconButton aria-label="Search" icon={<SearchIcon />} mr={4} />
        <Select placeholder="Category" mr={2}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </Select>
        <Select placeholder="Filter" mr={2}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </Select>
        <Select placeholder="Sort" mr={4}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </Select>
        <Button leftIcon={<ImportIcon />} mr={2}>Import</Button>
        <Button leftIcon={<ExportIcon />}>Export</Button>
      </Flex>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ITEM</Th>
            <Th>VALUE ($)</Th>
            <Th>DATA</Th>
            <Th>DATA</Th>
            <Th>STATUS</Th>
            <Th>ACTION</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Array.from({ length: 10 }).map((_, index) => (
            <Tr key={index}>
              <Td>Lorem dolore</Td>
              <Td>9,000</Td>
              <Td>Data series</Td>
              <Td>DD/MM/YY</Td>
              <Td><Button size="sm">Status</Button></Td>
              <Td>
                <IconButton aria-label="Edit" icon={<EditIcon />} mr={2} />
                <IconButton aria-label="Delete" icon={<DeleteIcon />} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Flex mt={4} justify="space-between" align="center">
        <Text>106 results</Text>
        <Flex>
          <Button size="sm" mr={2}>1</Button>
          <Button size="sm" mr={2}>2</Button>
          <Button size="sm" mr={2}>3</Button>
          <Button size="sm" mr={2}>4</Button>
          <Button size="sm" mr={2}>...</Button>
          <Button size="sm" mr={2}>10</Button>
          <Button size="sm">11</Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default MainContent;