import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

const FeedbackList = ({ feedback, handleDelete }) => {
  //   if (!feedback || feedback.length === 0) {
  //     return <p>No feedback yet</p>;
  //   }

  return (
    <div>
      <AnimatePresence>
        {feedback.map((item) => {
          return (
            <motion.div key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <FeedbackItem item={item} handleDelete={handleDelete} />
            </motion.div>
          );
        })}
      </AnimatePresence>
      {/* {feedback.map((item) => {
        return <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />;
      })} */}
    </div>
  );
};

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;
