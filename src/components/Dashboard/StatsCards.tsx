/**
 * Stats Cards Component
 * Displays key metrics like total onboarded employees and total programs booked
 */

import {
  Box,
  Flex,
  Text,
  HStack,
  VStack,
  Icon,
  Circle,
} from '@chakra-ui/react';
import { FiUsers, FiBookOpen, FiTrendingUp } from 'react-icons/fi';

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  trend: string;
  trendColor: string;
  icon: any;
  iconBg: string;
}

// Individual stat card component
const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  subtitle,
  trend,
  trendColor,
  icon,
  iconBg,
}) => {
  return (
    <Box
      bg="white"
      borderRadius="12px"
      p={4}
      border="1px solid none"
      boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.1)"
      flex={1}
    >
      {/* Header with Icon */}
      <Flex justify="space-between" align="flex-start" mb={4} flexDirection="column">
        <VStack align="start" spacing={1}>
          <Text fontSize="14px" color="gray.500" fontWeight="500">
            {title}
          </Text>
          <Circle size="36px" bg={iconBg}>
            <Icon as={icon} boxSize={4} color="white" />
          </Circle>
          <Text fontSize="28px" fontWeight="700" color="gray.800">
            {value}
          </Text>
          <Text fontSize="12px" color="gray.500">
            {subtitle}
          </Text>
        </VStack>
        
      </Flex>

      {/* Trend Indicator */}
      <HStack spacing={2}>
        <Icon as={FiTrendingUp} boxSize={4} color={trendColor} />
        <Text fontSize="12px" color={trendColor} fontWeight="500">
          {trend}
        </Text>
        <Text fontSize="12px" color="gray.500">
          this month
        </Text>
      </HStack>
    </Box>
  );
};

const StatsCards: React.FC = () => {
  const stats = [
    {
      title: 'Total Onboarded Employees',
      value: '48',
      subtitle: 'Employees',
      trend: '21%',
      trendColor: 'green.500',
      icon: FiUsers,
      iconBg: 'blue.500',
    },
    {
      title: 'Total Programs Booked',
      value: '23',
      subtitle: 'Sessions',
      trend: '21%',
      trendColor: 'green.500',
      icon: FiBookOpen,
      iconBg: 'green.500',
    },
  ];

  return (
    <HStack spacing={4} w="100%" alignItems="stretch">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </HStack>
  );
};

export default StatsCards;