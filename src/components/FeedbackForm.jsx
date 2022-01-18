import { useState } from "react";
import { HStack, Flex, Box, Textarea, Button, chakra } from "@chakra-ui/react";
import RatingSelect from "./RatingSelect";

const FeedbackForm = ({ handleAdd }) => {
  const [star, setStar] = useState(1);
  const [text, setText] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleSend = () => {
    if (text.trim().length > 10) {
      const newFeedback = {
        text: text,
        rating: star,
      };
      handleAdd(newFeedback);
      setText("");
    }
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
            <RatingSelect
              select={(rating) => {
                setStar(rating);
              }}
            />
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
              <Button onClick={handleSend} colorScheme="purple" mt={6}>
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
