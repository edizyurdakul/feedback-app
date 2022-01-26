import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  // Fetch Feedback data from JSON Server
  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const response = await fetch(
      "https://feedback-app-json-server.herokuapp.com/feedback"
    );
    const data = await response.json();
    setFeedback(data);
    setLoading(false);
  };

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
        loading,
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
