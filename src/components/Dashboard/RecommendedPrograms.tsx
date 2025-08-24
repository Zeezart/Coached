/**
 * Recommended Programs Component
 * Displays coaching programs with course information and stats
 */

import {
  Box,
  Flex,
  Text,
  HStack,
  VStack,
  Image,
  Badge,
  Button,
} from '@chakra-ui/react';

// Import generated images
import coachingImage from '../../assets/coaching-confidence.jpg';
import writingImage from '../../assets/writing-workshop.jpg';

interface ProgramCardProps {
  title: string;
  category: string;
  coach: string;
  bookings: number;
  coaches: number;
  image: string;
}

// Individual program card component
const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  category,
  coach,
  bookings,
  coaches,
  image,
}) => {
  return (
    <Box
      bg="white"
      borderRadius="12px"
      overflow="hidden"
      border="1px solid"
      borderColor="gray.200"
      boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.1)"
      minW="380px"
      display="flex"
      flexDirection="row"
    >
      {/* Program Image */}
      <Box w="100%">
        <Image
        src={image}
        alt={title}
        w="100%"
        h="100%"
        objectFit="cover"
      />
      </Box>

      {/* Program Content */}
      <Box p={5}>
        <VStack align="start" spacing={3}>
          {/* Title */}
          <Text
            fontSize="16px"
            fontWeight="600"
            color="gray.800"
            lineHeight="1.4"
          >
            {title}
          </Text>

          {/* Stats */}
          <HStack spacing={4}>
            <VStack align="start" spacing={0}>
              <Text fontSize="12px" color="gray.500">
                {bookings} Bookings
              </Text>
            </VStack>
            
            <VStack align="start" spacing={0}>
              <Text fontSize="12px" color="gray.500">
                {coaches} Coaches
              </Text>
            </VStack>
          </HStack>

          {/* Category Badge */}
          <Text
            fontWeight="bold"
            fontSize="14px"
          >
            {category}
          </Text>

          {/* Coach */}
          <Text fontSize="12px" color="gray.500">
            Coach: {coach}
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};

const RecommendedPrograms: React.FC = () => {
  const programs = [
    {
      title: 'How to stay confident all day long',
      category: 'Self Development',
      coach: 'Category',
      bookings: 50,
      coaches: 25,
      image: coachingImage,
    },
    {
      title: 'Writing with Flair: Expressing yourself with...',
      category: 'Self Development',
      coach: 'Category',
      bookings: 83,
      coaches: 75,
      image: writingImage,
    },
  ];

  return (
    <Box bg="white" p={6} borderRadius="12px" boxShadow="sm">
      {/* Section Header */}
      <Flex justify="space-between" align="center" mb={4}>
        <HStack spacing={3}>
          <Text fontSize="18px" fontWeight="600" color="gray.800">
            Recommended Programs
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

      {/* Programs Grid */}
      <HStack spacing={4} overflowX="auto"
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
      pb={4} >
        {programs.map((program, index) => (
          <ProgramCard key={index} {...program} />
        ))}
      </HStack>
    </Box>
  );
};

export default RecommendedPrograms;