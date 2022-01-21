import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: "d7a6fd8d-6127-4d79-8cce-d8fb8b03bb52",
      rating: 2,
      text: "This project was built to understand Context APi, useState, managing global state, form validation, and framer motion AnimatePresence on exit and enter",
    },
    {
      id: "9fcf31e3-c087-4d17-8673-4c176828f137",
      rating: 5,
      text: "Feedback App was inspired by React Front to Back 2022 udemy course from Traversy Media",
    },
    {
      id: "b3473981-defe-4074-ab0f-3c691b54717f",
      rating: 5,
      text: "This project helped me understand more on prop drilling and how to rather implement a global state for the all the components access the states, for cleaner application",
    },

    {
      id: "eb93df42-3afc-465e-b3dd-eb507fd3d76f",
      rating: 1,
      text: "Built with React.JS, Chakra-UI, and Framer Motion",
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  // Add Feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  // Delete Feedback
  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  // const reset state after cancel
  const [reset, setReset] = useState(true);

  // Set feedback to be updated
  const editFeedback = (item) => {
    setReset(false);
    setFeedbackEdit({ item, edit: true });
  };

  const updateFeedback = (id, updatedItem) => {
    if (feedbackEdit.edit === true) {
      setFeedback(
        feedback.map((item) =>
          item.id === id ? { ...item, ...updatedItem } : item
        )
      );
    }
  };

  const editReset = (state) => {
    setReset(state);
  };

  useEffect(() => {
    if (reset === true) {
      setFeedbackEdit({ item: {}, edit: false });
    }
  }, [reset]);

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        editReset,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
