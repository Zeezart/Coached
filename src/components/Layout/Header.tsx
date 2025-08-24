/**
 * Header Component
 * Contains the logo, search bar, action buttons, and user profile section
 */

import {
  Box,
  Flex,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Avatar,
  Icon,
  Badge,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import { FiSearch, FiBell } from 'react-icons/fi';

const Header: React.FC = () => {
  return (
    <Box
      as="header"
      bg="white"
      borderBottom="1px solid"
      borderColor="gray.200"
      h="72px"
      position="fixed"
      top={0}
      // left="240px"
      //right={0}
      zIndex={100}
      // px={6}
      w="100%"
    >
      <Flex align="center" justify="space-between" h="100%" p="0 2rem">
        {/* Logo */}
        <Text
          fontSize="24px"
          fontWeight="bold"
          color="brand.500"
          fontFamily="heading"
        >
          Coached
        </Text>

        {/* Center Section with Search */}
        <Flex flex={1} justify="center" mx={8}>
          <InputGroup maxW="400px" w="100%">
            <InputLeftElement pointerEvents="none">
              <Icon as={FiSearch} color="gray.400" boxSize={4} />
            </InputLeftElement>
            <Input
              placeholder="Search"
              bg="gray.50"
              border="1px solid"
              borderColor="gray.200"
              borderRadius="8px"
              fontSize="14px"
              _focus={{
                bg: 'white',
                borderColor: 'brand.500',
                boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)',
              }}
            />
          </InputGroup>
        </Flex>

        {/* Right Section with Actions and Profile */}
        <HStack spacing={4}>
          {/* Action Buttons */}
          <Button
            size="sm"
            bg="brand.500"
            color="white"
            _hover={{ bg: 'brand.600' }}
            fontWeight="500"
            px={4}
            h="36px"
            fontSize="14px"
          >
            Book Session
          </Button>
          
          <Button
            size="sm"
            variant="outline"
            borderColor="brand.500"
            color="brand.500"
            _hover={{ 
              bg: 'brand.50',
              borderColor: 'brand.600',
            }}
            fontWeight="500"
            px={4}
            h="36px"
            fontSize="14px"
          >
            Add Employee
          </Button>

          {/* Notification Bell */}
          <Box position="relative">
            <IconButton
              aria-label="Notifications"
              icon={<Icon as={FiBell} boxSize={5} />}
              variant="ghost"
              color="gray.600"
              _hover={{ bg: 'gray.50' }}
              size="sm"
            />
            <Badge
              position="absolute"
              top="2px"
              right="2px"
              bg="brand.500"
              color="white"
              borderRadius="full"
              boxSize="8px"
              p={0}
            />
          </Box>

          {/* User Profile */}
          <HStack spacing={3}>
            <Avatar
              size="sm"
              name="Adams Wheeler"
              src="/lovable-uploads/ec0f8101-252f-4b45-a2a0-eb0aed6ee13b.png"
            />
            <Box textAlign="left">
              <Text fontSize="14px" fontWeight="500" color="gray.800">
                Adams Wheeler
              </Text>
              <Text fontSize="12px" color="gray.500">
                Admin
              </Text>
            </Box>
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;