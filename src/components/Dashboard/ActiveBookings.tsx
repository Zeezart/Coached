/**
 * Active Bookings Component
 * Displays the current active coaching sessions with ratings and participant information
 */

import {
  Box,
  Flex,
  Text,
  HStack,
  VStack,
  Avatar,
  AvatarGroup,
  Button,
  Badge,
  Icon,
  Divider,
} from '@chakra-ui/react';
import { FiStar, FiUsers } from 'react-icons/fi';

interface BookingCardProps {
  title: string;
  instructor: string;
  rating: number;
  sessions: number;
  participants: string[];
}

// Individual booking card component
const BookingCard: React.FC<BookingCardProps> = ({
  title,
  instructor,
  rating,
  sessions,
  participants,
}) => {
  return (
    <Box
      bg="white"
      borderRadius="12px"
      p={5}
      border="1px solid"
      borderColor="gray.200"
      boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.1)"
      minW="250px"
    >
      {/* Session Title */}
      <Text
        fontSize="16px"
        fontWeight="600"
        color="gray.800"
        mb={3}
        lineHeight="1.4"
      >
        {title}
      </Text>

      {/* Instructor Info */}
      <HStack spacing={3} mb={4}>
        <Avatar size="sm" name={instructor} />
        <VStack align="start" spacing={0}>
          <Text fontSize="14px" fontWeight="500" color="gray.800">
            {instructor}
          </Text>
          <Text fontSize="12px" color="gray.500">
            Coach
          </Text>
        </VStack>
      </HStack>

      {/* Rating */}
      <HStack spacing={2} mb={4}>
        <HStack spacing={1}>
          {[...Array(5)].map((_, i) => (
            <Icon
              key={i}
              as={FiStar}
              boxSize={3}
              color={i < rating ? 'yellow.400' : 'gray.300'}
              fill={i < rating ? 'currentColor' : 'none'}
            />
          ))}
        </HStack>
        <Text fontSize="14px" fontWeight="500" color="gray.800">
          {rating}.0
        </Text>
      </HStack>

      {/* Participants and Sessions */}
      <Flex justify="space-between" align="center" mb={4}>
        <AvatarGroup size="xs" max={4}>
          {participants.map((participant, index) => (
            <Avatar key={index} name={participant} />
          ))}
        </AvatarGroup>
        
        <HStack spacing={2}>
          <Icon as={FiUsers} boxSize={4} color="gray.500" />
          <Text fontSize="12px" color="gray.500">
            {sessions} Sessions
          </Text>
        </HStack>
      </Flex>

        <Divider borderColor="gray.200" my={4} />
      {/* View Details Button */}
      <Button
        variant="ghost"
        size="sm"
        color="brand.500"
        fontWeight="500"
        w="100%"
        _hover={{ bg: 'brand.50' }}
        bgColor= "#fff0f4"
        p="1rem 0"
      >
        View Details
      </Button>
    </Box>
  );
};

const ActiveBookings: React.FC = () => {
  // Sample booking data
  const bookings = [
    {
      title: 'Public Speaking: Mastering Presentations V1',
      instructor: 'Marie Patito',
      rating: 5,
      sessions: 12,
      participants: ['John Doe', 'Jane Smith', 'Bob Johnson', 'Alice Brown'],
    },
    {
      title: 'Public Speaking: Mastering Presentations V1',
      instructor: 'Marie Patito',
      rating: 5,
      sessions: 12,
      participants: ['John Doe', 'Jane Smith', 'Bob Johnson', 'Alice Brown'],
    },
    {
      title: 'Public Speaking: Mastering Presentations V1',
      instructor: 'Marie Patito',
      rating: 5,
      sessions: 12,
      participants: ['John Doe', 'Jane Smith', 'Bob Johnson', 'Alice Brown'],
    },
    {
      title: 'Public Speaking: Mastering Presentations V1',
      instructor: 'Marie Patito',
      rating: 5,
      sessions: 12,
      participants: ['John Doe', 'Jane Smith', 'Bob Johnson', 'Alice Brown'],
    },
  ];

  return (
    <Box bg="white" p={6} borderRadius="12px" boxShadow="sm" >
      {/* Section Header */}
      <Flex justify="space-between" align="center" mb={4}>
        <HStack spacing={3}>
          <Text fontSize="18px" fontWeight="600" color="gray.800">
            Active Bookings
          </Text>
          <Box w="8px" h="8px" bg="green.400" borderRadius="full" />
        </HStack>
        <Button
          variant="link"
          color="brand.500"
          fontSize="14px"
          fontWeight="500"
        >
          See all
        </Button>
      </Flex>

      {/* Bookings Grid - Scrollable within container */}
      <Box
        overflowX="auto"
        pb={4}
        css={{
          '&::-webkit-scrollbar': {
            height: '6px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
            borderRadius: '3px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#c1c1c1',
            borderRadius: '3px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#a1a1a1',
          },
        }}
      >
        <HStack spacing={4} minW="fit-content">
          {bookings.map((booking, index) => (
            <BookingCard key={index} {...booking} />
          ))}
        </HStack>
      </Box>
    </Box>
  );
};

export default ActiveBookings;