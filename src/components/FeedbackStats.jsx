import PropTypes from "prop-types";
import { Flex, Box, chakra } from "@chakra-ui/react";

const FeedbackStats = ({ feedback }) => {
  // Average Rating
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  average = average.toFixed(1).replace(/[.,]0$/, "");

  return (
    <Flex p={4} justifyContent="center">
      <Box
        width="xl"
        px={8}
        bgColor="purple.500"
        py={4}
        rounded="lg"
        shadow="md"
        maxW="xl"
        css={{ transition: "all ease-in-out 0.15s" }}
        _hover={{
          transform: `${" translateY(-2px)"} ${"scale(1.005)"}`,
          shadow: "lg",
        }}
      >
        <Flex
          alignItems="center"
          alignContent="center"
          justifyContent="space-between"
          fontWeight="bold"
          fontSize={{ base: "sm", sm: "md" }}
          as="h2"
          my={2}
        >
          <Box>
            <chakra.h2>{feedback.length} Reviews</chakra.h2>
          </Box>
          <Box>
            <chakra.h2>Average Rating: {isNaN(average) ? 0 : average}</chakra.h2>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackStats;
