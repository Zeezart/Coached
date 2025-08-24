/**
 * Main Dashboard Page
 * Combines all dashboard components in the correct layout structure
 */

import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Container,
} from '@chakra-ui/react';

// Import all dashboard components
import Sidebar from '../components/Layout/Sidebar';
import Header from '../components/Layout/Header';
import ActiveBookings from '../components/Dashboard/ActiveBookings';
import StatsCards from '../components/Dashboard/StatsCards';
import RecommendedPrograms from '../components/Dashboard/RecommendedPrograms';
import RecentSections from '../components/Dashboard/RecentSections';
import EmployeeList from '../components/Dashboard/EmployeeList';

const Dashboard: React.FC = () => {
  return (
    <Box minH="100vh" bg="gray.50">
      {/* Sidebar Navigation */}
      <Sidebar activeItem="Overview" />
      
      {/* Header */}
      <Header />
      
      {/* Main Content Area */}
      <Box ml="240px" pt="72px">
        <Container maxW="none" px={6} py={6}>
          {/* Welcome Section */}
          <VStack align="start" spacing={1} mb={6}>
            <Text fontSize="24px" fontWeight="700" color="gray.800">
              Welcome Adams
            </Text>
            <Text fontSize="14px" color="gray.500">
              We can't wait to see Rancha PLC's growth through Coached
            </Text>
          </VStack>

          {/* First Row: Employee List positioned before stats */}
          <Flex gap={6} mb={6} align="start">
            {/* Empty space to align with active bookings */}
            <Box flex="0 0 55%"></Box>
            
            {/* Employee List in right column */}
            <Box flex={1}>
              <EmployeeList />
            </Box>
          </Flex>

          {/* Second Row: Active Bookings + Stats Cards */}
          <Flex gap={6} mb={6} align="start">
            {/* Active Bookings - 55% width */}
            <Box flex="0 0 55%">
              <ActiveBookings />
            </Box>

            {/* Stats Cards in remaining space */}
            <Box flex={1}>
              <StatsCards />
            </Box>
          </Flex>

          {/* Third Row: Recommended Programs - Full Width */}
          <Box mb={6}>
            <RecommendedPrograms />
          </Box>

          {/* Fourth Row: Recent Messages and Invoices - Side by Side */}
          <RecentSections />
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;