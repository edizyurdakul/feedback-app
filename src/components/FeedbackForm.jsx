import React, { useState, useEffect, useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import {
  HStack,
  Flex,
  Box,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Textarea,
  Button,
  chakra,
} from "@chakra-ui/react";
import RatingSelect from "./RatingSelect";

const FeedbackForm = () => {
  const [star, setStar] = useState(1);
  const [text, setText] = useState("");
  // Edit
  const [editRating, setEditRating] = useState(1);
  const [editReview, setEditReview] = useState("");
  const [editOpen, setEditOpen] = useState(false);
  const cancelEditRef = React.useRef();
  const { addFeedback, feedbackEdit, editReset, updateFeedback } =
    useContext(FeedbackContext);

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleStar = (rating) => {
    setStar(rating);
  };

  const handleSend = () => {
    if (text.trim().length > 10) {
      const newFeedback = {
        text: text,
        rating: star,
      };
      addFeedback(newFeedback);
      setText("");
    }
  };

  useEffect(() => {
    setStar(star);
  }, [star]);

  // Edit
  const onEditCancel = () => {
    editReset(true);
    setEditOpen(false);
    setEditReview("");
    setEditRating(1);
    setStar(1);
  };

  const handleEditRating = (rating) => {
    setEditRating(rating);
  };

  const handleEditText = (e) => {
    setEditReview(e.target.value);
  };

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setEditOpen(true);
      setEditRating(feedbackEdit.item.rating);
      setEditReview(feedbackEdit.item.text);
      // run modal
    }
  }, [feedbackEdit]);

  const handleEditSend = () => {
    if (feedbackEdit.edit === true) {
      const updatedFeedbackItem = {
        text: editReview,
        rating: editRating,
      };
      updateFeedback(feedbackEdit.item.id, updatedFeedbackItem);
      onEditCancel();
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
        <AlertDialog
          isOpen={editOpen}
          leastDestructiveRef={cancelEditRef}
          onClose={onEditCancel}
        >
          <AlertDialogOverlay>
            <AlertDialogContent backgroundColor="gray.900">
              <AlertDialogHeader
                color="purple.100"
                fontSize="lg"
                fontWeight="bold"
              >
                Edit Review
              </AlertDialogHeader>
              <AlertDialogBody color="gray.900">
                <RatingSelect
                  select={(rating) => {
                    handleEditRating(rating);
                  }}
                  editRating={editRating}
                />
                <Textarea
                  placeholder="Enter your review here"
                  mt={4}
                  size="md"
                  resize={"none"}
                  colorScheme="purple"
                  color="white"
                  focusBorderColor="purple.500"
                  _hover={{ borderColor: "purple.500" }}
                  borderColor="purple.300"
                  onChange={handleEditText}
                  value={editReview}
                />
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button
                  _focus={{ boxShadow: "0 0 0 3px #D6BCFA" }}
                  color="gray.900"
                  ref={cancelEditRef}
                  onClick={onEditCancel}
                  size="md"
                >
                  Cancel
                </Button>
                <Button
                  colorScheme="purple"
                  _focus={{ boxShadow: "0 0 0 3px #E9D8FD" }}
                  size="md"
                  ml={3}
                  onClick={handleEditSend}
                >
                  Save
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
        <Flex
          alignItems="center"
          alignContent="center"
          justifyContent="space-between"
          mt={2}
        >
          <HStack spacing={1} display="flex" alignItems="center">
            <RatingSelect
              select={(star) => {
                handleStar(star);
              }}
            />
          </HStack>
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
