/**
 * Employee List Component
 * Displays the onboarded employees with their information and activity status
 */

import {
  Box,
  Flex,
  Text,
  HStack,
  VStack,
  Avatar,
  Button,
  Badge,
} from '@chakra-ui/react';

interface EmployeeItemProps {
  name: string;
  email: string;
  programs: number;
  daysAgo: number;
  isLastActive?: boolean;
}

// Individual employee list item
const EmployeeItem: React.FC<EmployeeItemProps> = ({
  name,
  email,
  programs,
  daysAgo,
  isLastActive = false,
}) => {
  return (
    <Flex justify="space-between" align="center" py={3}>
      {/* Employee Info */}
      <HStack spacing={3}>
        <Avatar size="sm" name={name} />
        <VStack align="start" spacing={0}>
          <Text fontSize="12px" fontWeight="500" color="gray.800">
            {name}
          </Text>
          <Text fontSize="10px" color="gray.500">
            {email}
          </Text>
        </VStack>
      </HStack>

      {/* Stats and Activity */}
      <VStack align="end" spacing={1}>
        <HStack spacing={4}>
          <VStack spacing={0}>
            <Text fontSize="12px" fontWeight="600" color="gray.800">
              {programs}
            </Text>
            <Text fontSize="10px" color="gray.500">
              Programs
            </Text>
          </VStack>

          <VStack spacing={0} align="end">
            <Text fontSize="12px" fontWeight="600" color="gray.800">
              {daysAgo} days ago
            </Text>
            <Text fontSize="10px" color="gray.500">
              {isLastActive ? 'Last Active' : 'Last Active'}
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </Flex>
  );
};

const EmployeeList: React.FC = () => {
  const employees = [
    {
      name: 'Terry Ademola',
      email: 'terryademola@gmail.com',
      programs: 5,
      daysAgo: 23,
    },
    {
      name: 'Krystal Raynor',
      email: 'krystalraynor@gmail.com',
      programs: 5,
      daysAgo: 23,
    },
    {
      name: 'Guadalupe McDer...',
      email: 'terryadmola@gmail.com',
      programs: 5,
      daysAgo: 23,
    },
    {
      name: 'Josephine Fell',
      email: 'terryadmola@gmail.com',
      programs: 5,
      daysAgo: 23,
    },
    {
      name: 'Latoya Hermiston',
      email: 'terryadmola@gmail.com',
      programs: 5,
      daysAgo: 23,
    },
  ];

  return (
    <Box
      bg="white"
      borderRadius="12px"
      border="1px solid"
      borderColor="gray.200"
      boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.1)"
      w="100%"
      h="fit-content"
    >
      {/* Header */}
      <Flex justify="space-between" align="center" p={5} borderBottom="1px solid" borderColor="gray.100">
        <HStack spacing={2}>
          <Text fontSize="16px" fontWeight="600" color="gray.800">
            Onboarded Employee List
          </Text>
          <Text
            fontWeight="bold"
            fontSize="16px"
          >
            (48)
          </Text>
        </HStack>
        
        <Button
          variant="link"
          color="brand.500"
          fontSize="12px"
          fontWeight="500"
        >
          Add New
        </Button>
      </Flex>

      {/* Employee List */}
      <Box px={5} py={2}>
        {employees.map((employee, index) => (
          <EmployeeItem
            key={index}
            {...employee}
            isLastActive={index === employees.length - 1}
          />
        ))}
      </Box>
    </Box>
  );
};

export default EmployeeList;