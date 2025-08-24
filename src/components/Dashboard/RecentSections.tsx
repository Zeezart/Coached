/**
 * Recent Sections Component
 * Contains Recent Messages and Recent Invoices sections
 */

import {
  Box,
  Flex,
  Text,
  HStack,
  VStack,
  Avatar,
  Badge,
  Icon,
  Button,
} from '@chakra-ui/react';
import { FiChevronRight, FiFileText } from 'react-icons/fi';

// Recent Messages Component
const RecentMessages: React.FC = () => {
  const messages = [
    {
      name: 'Joshua McKnight',
      avatar: 'JM',
      timeAgo: '5 hrs ago',
    },
  ];

  return (
    <Box
      bg="white"
      borderRadius="12px"
      border="1px solid"
      borderColor="gray.200"
      boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.1)"
      p={5}
      flex={1}
    >
      {/* Header */}
      <Flex justify="space-between" align="center" mb={4}>
        <Text fontSize="16px" fontWeight="600" color="gray.800">
          Recent Messages
        </Text>
        <Icon as={FiChevronRight} boxSize={5} color="gray.400" />
      </Flex>

      {/* Message Item */}
      {messages.map((message, index) => (
        <HStack key={index} spacing={3}>
          <Avatar size="sm" name={message.name} />
          <VStack align="start" spacing={0} flex={1}>
            <Text fontSize="14px" fontWeight="500" color="gray.800">
              {message.name}
            </Text>
            <Text fontSize="12px" color="gray.500">
              {message.timeAgo}
            </Text>
          </VStack>
        </HStack>
      ))}
    </Box>
  );
};

// Recent Invoices Component
const RecentInvoices: React.FC = () => {
  const invoices = [
    {
      id: '#45667 CFD',
      status: 'PENDING',
      timeAgo: '10 hrs ago',
    },
  ];

  return (
    <Box
      bg="white"
      borderRadius="12px"
      border="1px solid"
      borderColor="gray.200"
      boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.1)"
      p={5}
      flex={1}
    >
      {/* Header */}
      <Flex justify="space-between" align="center" mb={4}>
        <Text fontSize="16px" fontWeight="600" color="gray.800">
          Recent Invoices
        </Text>
        <Icon as={FiChevronRight} boxSize={5} color="gray.400" />
      </Flex>

      {/* Invoice Item */}
      {invoices.map((invoice, index) => (
        <HStack key={index} spacing={3} justify="space-between">
          <HStack spacing={3}>
            <Box
              bg="gray.100"
              borderRadius="8px"
              p={2}
            >
              <Icon as={FiFileText} boxSize={4} color="gray.600" />
            </Box>
            <VStack align="start" spacing={0}>
              <Text fontSize="14px" fontWeight="500" color="gray.800">
                Invoice {invoice.id}
              </Text>
              <Text fontSize="12px" color="gray.500">
                {invoice.timeAgo}
              </Text>
            </VStack>
          </HStack>
          
          <Badge
            colorScheme="yellow"
            variant="subtle"
            borderRadius="6px"
            px={2}
            py={1}
            fontSize="10px"
            fontWeight="600"
          >
            {invoice.status}
          </Badge>
        </HStack>
      ))}
    </Box>
  );
};

// Combined Recent Sections Component
const RecentSections: React.FC = () => {
  return (
    <HStack spacing={6} align="stretch">
      <RecentMessages />
      <RecentInvoices />
    </HStack>
  );
};

export default RecentSections;