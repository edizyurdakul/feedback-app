import { Flex, Box, HStack, chakra } from "@chakra-ui/react";
import { StarIcon, EditIcon, CloseIcon } from "@chakra-ui/icons";

const StarSwitch = (starRating) => {
  switch (starRating) {
    case 1:
      return (
        <>
          <StarIcon color="purple.200" />
          <StarIcon color="gray.500" />
          <StarIcon color="gray.500" />
          <StarIcon color="gray.500" />
          <StarIcon color="gray.500" />
        </>
      );
    case 2:
      return (
        <>
          <StarIcon color="purple.200" />
          <StarIcon color="purple.200" />
          <StarIcon color="gray.500" />
          <StarIcon color="gray.500" />
          <StarIcon color="gray.500" />
        </>
      );
    case 3:
      return (
        <>
          <StarIcon color="purple.200" />
          <StarIcon color="purple.200" />
          <StarIcon color="purple.200" />
          <StarIcon color="gray.500" />
          <StarIcon color="gray.500" />
        </>
      );
    case 4:
      return (
        <>
          <StarIcon color="purple.200" />
          <StarIcon color="purple.200" />
          <StarIcon color="purple.200" />
          <StarIcon color="purple.200" />
          <StarIcon color="gray.500" />
        </>
      );
    case 5:
      return (
        <>
          <StarIcon color="purple.200" />
          <StarIcon color="purple.200" />
          <StarIcon color="purple.200" />
          <StarIcon color="purple.200" />
          <StarIcon color="purple.200" />
        </>
      );
    default:
      break;
  }
};

function FeedbackItem({ item, handleDelete }) {
  return (
    <Flex p={4} justifyContent="center">
      <Box
        width="xl"
        px={8}
        bgColor="gray.800"
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
          mt={2}
        >
          <HStack spacing={1} display="flex" alignItems="center">
            {StarSwitch(item.rating)}
          </HStack>
          <Box>
            <EditIcon css={{ cursor: "pointer" }} mr={6} color="purple.200" />
            <CloseIcon
              css={{ cursor: "pointer" }}
              onClick={() => handleDelete(item.id)}
              color="purple.200"
            />
          </Box>
        </Flex>
        <Box mt={2}>
          <chakra.p mt={4}>{item.text}</chakra.p>
        </Box>
      </Box>
    </Flex>
  );
}

export default FeedbackItem;
