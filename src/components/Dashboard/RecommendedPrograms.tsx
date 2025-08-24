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
      w="280px"
    >
      {/* Program Image */}
      <Image
        src={image}
        alt={title}
        w="100%"
        h="140px"
        objectFit="cover"
      />

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
              <Text fontSize="18px" fontWeight="700" color="gray.800">
                {bookings}
              </Text>
              <Text fontSize="12px" color="gray.500">
                Bookings
              </Text>
            </VStack>
            
            <VStack align="start" spacing={0}>
              <Text fontSize="18px" fontWeight="700" color="gray.800">
                {coaches}
              </Text>
              <Text fontSize="12px" color="gray.500">
                Coaches
              </Text>
            </VStack>
          </HStack>

          {/* Category Badge */}
          <Badge
            colorScheme="gray"
            variant="subtle"
            px={3}
            py={1}
            borderRadius="6px"
            fontSize="12px"
          >
            {category}
          </Badge>

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
    <Box>
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
      <HStack spacing={4} overflowX="auto" pb={4}>
        {programs.map((program, index) => (
          <ProgramCard key={index} {...program} />
        ))}
      </HStack>
    </Box>
  );
};

export default RecommendedPrograms;