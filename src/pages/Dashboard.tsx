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
          <Flex gap={6}>
            {/* Left Column - Main Content */}
            <Box flex={1}>
              {/* Welcome Section */}
              <VStack align="start" spacing={1} mb={8}>
                <Text fontSize="24px" fontWeight="700" color="gray.800">
                  Welcome Adams
                </Text>
                <Text fontSize="14px" color="gray.500">
                  We can't wait to see Rancha PLC's growth through Coached
                </Text>
              </VStack>

              {/* Active Bookings Section */}
              <Box mb={8}>
                <ActiveBookings />
              </Box>

              {/* Stats Cards */}
              <Box mb={8}>
                <StatsCards />
              </Box>

              {/* Recommended Programs */}
              <Box mb={8}>
                <RecommendedPrograms />
              </Box>

              {/* Recent Messages and Invoices */}
              <Box>
                <RecentSections />
              </Box>
            </Box>

            {/* Right Column - Employee List */}
            <Box>
              <EmployeeList />
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;