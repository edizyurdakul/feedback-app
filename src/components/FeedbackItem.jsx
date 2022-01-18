import React, { useState } from "react";
import {
  Flex,
  Box,
  HStack,
  chakra,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
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
  const [isOpen, setIsOpen] = useState(false);
  const onCancel = () => {
    setIsOpen(false);
  };
  const onDelete = (id) => {
    setIsOpen(false);
    handleDelete(id);
  };
  const cancelRef = React.useRef();
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
            {StarSwitch(item.rating)}
          </HStack>
          <Box>
            <EditIcon css={{ cursor: "pointer" }} mr={6} color="purple.200" />
            <CloseIcon css={{ cursor: "pointer" }} onClick={() => setIsOpen(true)} color="purple.200" />
          </Box>
        </Flex>
        <Box mt={2}>
          <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onCancel}>
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader color="purple.500" fontSize="lg" fontWeight="bold">
                  Delete Customer
                </AlertDialogHeader>
                <AlertDialogBody color="gray.900">Are you sure? You can't undo this action afterwards.</AlertDialogBody>

                <AlertDialogFooter>
                  <Button _focus={{ boxShadow: "0 0 0 3px #D6BCFA" }} color="gray.900" ref={cancelRef} onClick={onCancel}>
                    Cancel
                  </Button>
                  <Button
                    colorScheme="purple"
                    _focus={{ boxShadow: "0 0 0 3px #E9D8FD" }}
                    onClick={() => {
                      onDelete(item.id);
                    }}
                    ml={3}
                  >
                    Delete
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>

          <chakra.p mt={4}>{item.text}</chakra.p>
        </Box>
      </Box>
    </Flex>
  );
}

export default FeedbackItem;
