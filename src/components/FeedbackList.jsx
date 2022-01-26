import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";
import { Flex, Box, Spinner } from "@chakra-ui/react";

const FeedbackList = () => {
  const { feedback, loading } = useContext(FeedbackContext);

  if (loading) {
    return (
      <Flex p={4} justifyContent="center">
        <Box
          width="xl"
          px={8}
          py={4}
          rounded="lg"
          maxW="xl"
          display="flex"
          justifyContent="center"
        >
          <Spinner color="purple.600" />
        </Box>
      </Flex>
    );
  }

  return (
    <div>
      <AnimatePresence>
        {feedback.map((item) => {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem item={item} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackList;
