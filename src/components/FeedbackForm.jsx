import { useState } from "react";
import { HStack, Flex, Box, Textarea, Tooltip, Button, chakra } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const FeedbackForm = () => {
  const [star, setStar] = useState(1);
  const [text, setText] = useState("");

  const selectStar = () => {
    switch (star) {
      case 1:
        return (
          <>
            <StarIcon css={{ cursor: "pointer" }} onClick={() => setStar(1)} color="purple.200" />
            <StarIcon css={{ cursor: "pointer" }} onClick={() => setStar(2)} color="gray.500" />
            <StarIcon css={{ cursor: "pointer" }} onClick={() => setStar(3)} color="gray.500" />
            <StarIcon css={{ cursor: "pointer" }} onClick={() => setStar(4)} color="gray.500" />
            <StarIcon css={{ cursor: "pointer" }} onClick={() => setStar(5)} color="gray.500" />
          </>
        );
      case 2:
        return (
          <>
            <StarIcon css={{ cursor: "pointer" }} onClick={() => setStar(1)} color="purple.200" />
            <StarIcon css={{ cursor: "pointer" }} onClick={() => setStar(2)} color="purple.200" />
            <StarIcon css={{ cursor: "pointer" }} onClick={() => setStar(3)} color="gray.500" />
            <StarIcon css={{ cursor: "pointer" }} onClick={() => setStar(4)} color="gray.500" />
            <StarIcon css={{ cursor: "pointer" }} onClick={() => setStar(5)} color="gray.500" />
          </>
        );
      case 3:
        return (
          <>
            <StarIcon css={{ cursor: "pointer" }} onClick={() => setStar(1)} color="purple.200" />
            <StarIcon css={{ cursor: "pointer" }} onClick={() => setStar(2)} color="purple.200" />
            <StarIcon css={{ cursor: "pointer" }} onClick={() => setStar(3)} color="purple.200" />
            <StarIcon css={{ cursor: "pointer" }} onClick={() => setStar(4)} color="gray.500" />
            <StarIcon css={{ cursor: "pointer" }} onClick={() => setStar(5)} color="gray.500" />
          </>
        );
      case 4:
        return (
          <>
            <StarIcon css={{ cursor: "pointer" }} onClick={() => setStar(1)} color="purple.200" />
            <StarIcon css={{ cursor: "pointer" }} onClick={() => setStar(2)} color="purple.200" />
            <StarIcon css={{ cursor: "pointer" }} onClick={() => setStar(3)} color="purple.200" />
            <StarIcon css={{ cursor: "pointer" }} onClick={() => setStar(2)} color="purple.200" />
            <StarIcon css={{ cursor: "pointer" }} onClick={() => setStar(5)} color="gray.500" />
          </>
        );
      case 5:
        return (
          <>
            <StarIcon css={{ cursor: "pointer" }} onClick={() => setStar(1)} color="purple.200" />
            <StarIcon css={{ cursor: "pointer" }} onClick={() => setStar(2)} color="purple.200" />
            <StarIcon css={{ cursor: "pointer" }} onClick={() => setStar(3)} color="purple.200" />
            <StarIcon css={{ cursor: "pointer" }} onClick={() => setStar(4)} color="purple.200" />
            <StarIcon css={{ cursor: "pointer" }} onClick={() => setStar(5)} color="purple.200" />
          </>
        );

      default:
        return (
          <>
            <StarIcon css={{ cursor: "pointer" }} onClick={() => setStar(1)} color="purple.200" />
            <StarIcon css={{ cursor: "pointer" }} onClick={() => setStar(2)} color="gray.500" />
            <StarIcon css={{ cursor: "pointer" }} onClick={() => setStar(3)} color="gray.500" />
            <StarIcon css={{ cursor: "pointer" }} onClick={() => setStar(4)} color="gray.500" />
            <StarIcon css={{ cursor: "pointer" }} onClick={() => setStar(5)} color="gray.500" />
          </>
        );
    }
  };

  const handleText = (e) => {
    setText(e.target.value);
  };
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
        <Flex alignItems="center" alignContent="center" justifyContent="space-between" mt={2}>
          <HStack spacing={1} display="flex" alignItems="center">
            {selectStar(star)}
          </HStack>
          <Box></Box>
        </Flex>
        <Box mt={2}>
          <chakra.p mt={4}>How would you rate our service with us</chakra.p>
          <Textarea
            placeholder="Enter your review here"
            mt={4}
            size="md"
            resize={"none"}
            colorScheme="purple"
            focusBorderColor="purple.500"
            _hover={{ borderColor: "purple.500" }}
            borderColor="purple.300"
            onChange={handleText}
            value={text}
          />
          {text.trim().length === 0 ? (
            <Button isDisabled colorScheme="purple" mt={6}>
              Send
            </Button>
          ) : text.trim().length >= 0 && text.trim().length <= 10 ? (
            <>
              <Button isDisabled colorScheme="purple" mt={6}>
                Send
              </Button>
              <chakra.p mt={4} fontSize="sm">
                Please enter more than 10 characters
              </chakra.p>
            </>
          ) : (
            text.trim().length >= 10 && (
              <Button colorScheme="purple" mt={6}>
                Send
              </Button>
            )
          )}
        </Box>
      </Box>
    </Flex>
  );
};

export default FeedbackForm;
