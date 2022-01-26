import { createContext, useEffect, useState } from "react";

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
      "https://feedback-app-json-server.herokuapp.com/feedback?_sort=id&_order=desc"
    );
    const data = await response.json();
    setFeedback(data);
    setLoading(false);
  };

  // Add Feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch(
      "https://feedback-app-json-server.herokuapp.com/feedback",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newFeedback),
      }
    );

    const data = await response.json();

    setFeedback([data, ...feedback]);
  };

  // Delete Feedback
  const deleteFeedback = async (id) => {
    await fetch(
      `https://feedback-app-json-server.herokuapp.com/feedback/${id}`,
      { method: "DELETE" }
    );
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  // const reset state after cancel
  const [reset, setReset] = useState(true);

  // Set feedback to be updated
  const editFeedback = (item) => {
    setReset(false);
    setFeedbackEdit({ item, edit: true });
  };

  // Update Feedback
  const updateFeedback = async (id, updatedItem) => {
    const response = await fetch(
      `https://feedback-app-json-server.herokuapp.com/feedback/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedItem),
      }
    );

    const data = await response.json();
    if (feedbackEdit.edit === true) {
      setFeedback(
        feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
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
