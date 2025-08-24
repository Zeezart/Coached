/**
 * Sidebar Navigation Component
 * Contains the main navigation menu items with icons and active states
 */

import {
  Box,
  VStack,
  Button,
  Icon,
  Text,
  Flex,
} from '@chakra-ui/react';
import {
  FiGrid,
  FiCompass,
  FiCalendar,
  FiFileText,
  FiMessageSquare,
  FiLogOut,
} from 'react-icons/fi';

interface SidebarProps {
  activeItem?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeItem = 'Overview' }) => {
  // Navigation menu items with their respective icons
  const menuItems = [
    { icon: FiGrid, label: 'Overview', isActive: activeItem === 'Overview' },
    { icon: FiCompass, label: 'Explore', isActive: activeItem === 'Explore' },
    { icon: FiCalendar, label: 'Bookings', isActive: activeItem === 'Bookings' },
    { icon: FiFileText, label: 'Invoices', isActive: activeItem === 'Invoices' },
    { icon: FiMessageSquare, label: 'Messages', isActive: activeItem === 'Messages' },
  ];

  return (
    <Box
      w="240px"
      h="100vh"
      bg="white"
      borderRight="1px solid"
      borderColor="gray.200"
      py={6}
      position="fixed"
      left={0}
      top={0}
      zIndex={100}
    >
      {/* Navigation Menu Items */}
      <VStack spacing={1} align="stretch" px={4} mt={20}>
        {menuItems.map((item) => (
          <Button
            key={item.label}
            variant="ghost"
            justifyContent="flex-start"
            h="44px"
            px={4}
            color={item.isActive ? 'brand.500' : 'gray.600'}
            bg={item.isActive ? 'brand.50' : 'transparent'}
            _hover={{
              bg: item.isActive ? 'brand.50' : 'gray.50',
            }}
            leftIcon={<Icon as={item.icon} boxSize={5} />}
            fontWeight={item.isActive ? '600' : '400'}
          >
            <Text fontSize="14px">{item.label}</Text>
          </Button>
        ))}
      </VStack>

      {/* Logout Button at Bottom */}
      <Box position="absolute" bottom={6} left={4} right={4}>
        <Button
          variant="ghost"
          justifyContent="flex-start"
          h="44px"
          px={4}
          color="gray.600"
          _hover={{ bg: 'gray.50' }}
          leftIcon={<Icon as={FiLogOut} boxSize={5} />}
          fontWeight="400"
        >
          <Text fontSize="14px">Log out</Text>
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar;